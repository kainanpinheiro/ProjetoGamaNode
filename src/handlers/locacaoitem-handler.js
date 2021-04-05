const LocacaoItemService = require("../services/locacaoitem-service");
const BaseHandler = require("./base-handler");

class LocacaoItemHandler extends BaseHandler {

    constructor() {
        super(new LocacaoItemService())
    }

    retirar = async (req, h) => {
        try {
            return await this.service.retirar(req.params.id, req.payload)
        } catch (err) {
            console.error(err)
            return err
        }
    }
}

module.exports = new LocacaoItemHandler()