const LocacaoService = require("../services/locacao-service");
const BaseHandler = require("./base-handler");

class LocacaoHandler extends BaseHandler {

    constructor() {
        super(new LocacaoService())
    }

    retirar = async (req, h) => {
        try {
            return await this.service.retirar(req.params.id, req.payload);
        } catch (err) {
            console.log(err);
            return err;
        }
    };

    devolver = async (req, h) => {
        try {
            return await this.service.devolver(req.params.id, req.payload);
        } catch (err) {
            console.log(err);
            return err;
        }
    };
}

module.exports = new LocacaoHandler()