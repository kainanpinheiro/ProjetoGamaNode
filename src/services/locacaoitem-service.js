const BaseService = require("./base-service")
const LocacaoItemRepository = require('../repositories/locacaoitem-repository')
const LocacaoRepository = require('../repositories/locacao-repository')
class LocacaoItemService extends BaseService {

    constructor() {
        super(new LocacaoItemRepository())
    }

    async add(payload) {
        var retorno = [];

        // PRECISA VALIDAR SE O LIVRO EXISTE!
        const livros = payload.livro_id;
        if (livros.length > 1) {
            livros.forEach(async (element, index) => {
                let livro_id = element.id
                retorno.push(
                    {
                        data_entrega: payload.data_entrega,
                        data_previsao_entrega: payload.data_previsao_entrega,
                        diarias: payload.diarias,
                        valor_diaria: payload.valor_diaria,
                        valor_locacao: payload.valor_locacao,
                        status: payload.status,
                        livro_id: livro_id,
                        locacao_id: payload.locacao_id,
                    }
                )
                await super.add(retorno[index]);
            });
        } else {
            payload.livro_id = payload.livro_id[0].id;
            retorno = payload;
            await super.add(payload);
        }

        return retorno;
    }
    async retirar(id, payload) {
        let locacaoRepository = new LocacaoRepository();
        let objLocacao = await locacaoRepository.getById(id);
        if (objLocacao != null) {
            console.log(objLocacao.valor_total);
        }
        // return await this.repository.update(id, payload);
        return [];
    }
}

module.exports = LocacaoItemService