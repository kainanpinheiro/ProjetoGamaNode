const BaseHandler = require("./baseHandler");
const enderecoService = require('../services/enderecoService')


class EnderecoHandler extends BaseHandler{

    constructor(){
        super(new enderecoService())
    }
    
}

module.exports = new EnderecoHandler()