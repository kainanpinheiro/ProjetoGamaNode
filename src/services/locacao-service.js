const BaseService = require("./base-service")
const LocacaoRepository = require('../repositories/locacao-repository')
const LocalDate = require('localdate');

class LocacaoService extends BaseService {

    constructor() {
        super(new LocacaoRepository())
    }

    async add(payload) {
        // let insert;

        // var retorno = [];

        // // PRECISA VALIDAR SE O LIVRO EXISTE!
        // const livros = payload.livro_id;
        // if (livros.length > 1) {
        //     livros.forEach(async (element, index) => {
        //         let livro_id = element.id
        //         retorno.push(
        //             {
        //                 data_entrega: payload.data_entrega,
        //                 data_previsao_entrega: payload.data_previsao_entrega,
        //                 diarias: payload.diarias,
        //                 valor_diaria: payload.valor_diaria,
        //                 valor_locacao: payload.valor_locacao,
        //                 status: payload.status,
        //                 livro_id: livro_id,
        //                 locacao_id: this,
        //             }
        //         )
        //         insert = await super.add(retorno[index]);
        //     });
        // } else {
        //     payload.livro_id = payload.livro_id[0].id;
        //     retorno = payload;
        //     insert = await super.add(payload);
        // }

        // return await super.getById(insert.id);

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

        return await super.getById(insert.id);

    }


}

module.exports = LocacaoService