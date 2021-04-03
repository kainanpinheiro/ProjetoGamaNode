const LocacaoService = require("../services/locacao-service");
const BaseHandler = require("./base-handler");

class LocacaoHandler extends BaseHandler {

    constructor() {
        super(new LocacaoService())
    }
}

module.exports = new LocacaoHandler()