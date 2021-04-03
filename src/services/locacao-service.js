const BaseService = require("./base-service")
const LocacaoRepository = require('../repositories/locacao-repository')


class LocacaoService extends BaseService {

    constructor() {
        super(new LocacaoRepository())
    }
}

module.exports = LocacaoService