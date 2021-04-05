const BaseService = require("./base-service")
const LocacaoItemRepository = require('../repositories/locacaoitem-repository')
const LocacaoRepository = require('../repositories/locacao-repository')
const LivroRepository = require('../repositories/livro-repository');
const LocalDate = require('localdate');

class LocacaoService extends BaseService {

    constructor() {
        super(new LocacaoRepository())
    }

    async add(payload) {

        let hoje = new Date();
        Date.prototype.addDays = function (days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        }

        payload.data_agendamento = hoje;
        payload.data_finalizacao = hoje.addDays(5);
        payload.valor_total = 0.0;
        payload.status = "R";

        const insert = await super.add(payload);

        // CADASTRAR LOCACAO ITEM
        const livroRepository = new LivroRepository();
        const locacaoItemRepository = new LocacaoItemRepository();

        // PRECISA VALIDAR SE O LIVRO EXISTE!
        const livros = payload.livro_id;
        var retorno = [];

        livros.forEach(async (element, index) => {
            let livro_id = element.id
            const livro = await livroRepository.getById(livro_id);

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
            const insertLocacaoItem = await locacaoItemRepository.add(retorno[index]);
        });

        return await super.getById(insert.id);

    }


}

module.exports = LocacaoService