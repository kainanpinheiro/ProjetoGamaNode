const LocacaoItemService = require("../services/locacaoitem-service");
const BaseHandler = require("./base-handler");

class LocacaoItemHandler extends BaseHandler {

    constructor() {
        super(new LocacaoItemService())
    }
}

module.exports = new LocacaoItemHandler()