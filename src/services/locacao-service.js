const BaseService = require("./base-service")
const LocacaoItemRepository = require('../repositories/locacaoitem-repository')
const LocacaoRepository = require('../repositories/locacao-repository')
const LivroRepository = require('../repositories/livro-repository');

class LocacaoService extends BaseService {

    constructor() {
        super(new LocacaoRepository())
    }

    async getAll() {
        return await super.getAll()
    }

    async getById(id) {
        return await super.getById(id, ['cadastro', 'locacaoitem']);
    }

    async add(payload) {

        let hoje = new Date();

        payload.data_agendamento = hoje;
        payload.data_finalizacao = hoje.addDays(5);
        payload.valor_total = 0.0;
        payload.status = "R";

        const insert = await super.add(payload);

        // PRECISA VALIDAR SE O LIVRO EXISTE!
        const livros = payload.livro_id;
        var retorno = [];

        let livrosFalhados = "";

        let index = 0;
        for (const element of livros) {
            let livro_id = element.id

            const livroRepository = new LivroRepository();
            const livro = await livroRepository.getById(livro_id);

            if (livro != null && livro.exemplares > 0) {
                livro.exemplares = decrementarExemplares(livro);
                livro.reservados = incrementarReservados(livro);

                retorno.push(
                    {
                        data_entrega: payload.data_entrega,
                        data_previsao_entrega: payload.data_previsao_entrega,
                        diarias: 0.0,
                        valor_diaria: livro.valor_diaria,
                        valor_locacao: 0.0,
                        status: payload.status,
                        livro_id: livro_id,
                        locacao_id: insert.id,
                    }
                )
                const updateLivro = await livroRepository.update(livro.id, livro);
                const locacaoItemRepository = new LocacaoItemRepository();
                const insertLocacaoItem = await locacaoItemRepository.add(retorno[index]);
                retorno[index] = [{ 'item_id': insertLocacaoItem.id }, { 'livro_id': livro.id }];
                console.log(insertLocacaoItem.id)
            } else {
                livrosFalhados += livro_id + ', ';
            }
            index++;
        }

        // CASO TODOS OS LIVROS SEJAM ADICIONADOS, RETORNA O SUCESSO DO INSERT
        if (livros.length == retorno.length) {
            return await super.getById(insert.id, ['locacaoitem']);
        } else if (retorno.length > 0) {
            // CASO TENHA ADICIONADO MAIS DE 1 LIVRO MAS NÃO TIVER ADICIONADO TODOS OS LIVROS, DELETA TODO MUNDO, 
            // ISSO FOI FEITO PQ NÃO TIVEMOS TEMPO PARA FAZER TRANSAÇÃO
            for (const element of retorno) {
                console.log()
                console.log()

                const locacaoItemRepository = new LocacaoItemRepository();
                const deletado = await locacaoItemRepository.remove(element[0].item_id);

                const livroRepository = new LivroRepository();
                const livro = await livroRepository.getById(element[1].livro_id);

                livro.exemplares = incrementarExemplares(livro);
                livro.reservados = decrementarReservados(livro);

                const updateLivro = await livroRepository.update(livro.id, livro);
            }
            const deletado = await super.remove(insert.id);
        }

        // CASO CHEGUE AQUI É PQ NÃO HOUVE SUCESSO NO INSERT, ENTÃO JA RETORNA QUAIS LIVROS NÃO EXISTEM EXEMPLARES DISPONIVEIS
        return { 'falha': 'Livro(s) de id(s): ' + livrosFalhados.substring(0, livrosFalhados.length - 2) + ' esta(o) sem exemplar(es) disponiveis ou não cadastrado' }

    }

    async retirar(id) {
        let hoje = new Date();

        const locacao = await super.getById(id, ['locacaoitem']);

        if (locacao != null) {
            if (locacao.status != "E" && locacao.active) {
                locacao.data_retirada = hoje;

                const locacaoItem = locacao.locacaoitem;

                let valorTotal = 0.0;

                for (const element of locacaoItem) {
                    element.data_previsao_entrega = locacao.data_finalizacao;

                    element.diarias = calcDiarias(locacao.data_retirada);
                    element.valor_locacao = calcValorLocacao(element);

                    valorTotal += element.valor_locacao;

                    const locacaoItemRepository = new LocacaoItemRepository();
                    const updateLocacaoItem = await locacaoItemRepository.update(element.id, element);
                }

                locacao.status = "E"
                locacao.valor_total = valorTotal
                locacao.data_finalizacao = hoje.addDays(5);

                return await this.repository.update(id, locacao);

            } else {
                return { 'falha': 'Locação não pode ser alterada' }
            }
        } else {
            return { 'falha': 'Locação não encontrada em nosso banco de dados' }
        }
    }

    async devolver(id) {
        let hoje = new Date();

        const locacao = await super.getById(id, ['locacaoitem']);

        if (locacao != null) {
            if (locacao.active) {
                locacao.data_retirada = hoje;

                const locacaoItem = locacao.locacaoitem;

                let valorTotal = 0.0;

                for (const element of locacaoItem) {
                    element.data_entrega = hoje;

                    element.diarias = calcDiarias(locacao.data_retirada);
                    element.valor_locacao = calcValorLocacao(element);

                    element.active = false;

                    valorTotal += element.valor_locacao;

                    const livroRepository = new LivroRepository();
                    const livro = await livroRepository.getById(element.livro_id);

                    livro.exemplares = incrementarExemplares(livro);
                    livro.reservados = decrementarReservados(livro);

                    valorTotal += element.valor_locacao;

                    const locacaoItemRepository = new LocacaoItemRepository();
                    const updateLocacaoItem = await locacaoItemRepository.update(element.id, element);
                    const updateLivro = await livroRepository.update(livro.id, livro);
                }

                locacao.status = "F"
                locacao.valor_total = valorTotal
                locacao.data_finalizacao = hoje;
                locacao.active = false;

                return await this.repository.update(id, locacao);
            } else {
                return { 'falha': 'Locação não pode ser alterada' }
            }
        } else {
            return { 'falha': 'Locação não encontrada em nosso banco de dados' }
        }
    }

}

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function calcDiarias(past) {
    const now = new Date();
    const diff = Math.abs(now.getTime() - past.getTime()); // Subtrai uma data pela outra
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}

function calcValorLocacao(locacaoitem) {
    return locacaoitem.diarias * locacaoitem.valor_diaria;
}

function decrementarExemplares(livro) {
    return livro.exemplares - 1;
}

function incrementarReservados(livro) {
    return livro.reservados + 1;
}

function decrementarReservados(livro) {
    return livro.reservados - 1;
}

function incrementarExemplares(livro) {
    return livro.exemplares + 1;
}


module.exports = LocacaoService