const BaseService = require("./baseService");
const enderecoRepository = require('../repositories/enderecoRepository')


class EnderecoService extends BaseService{

    constructor(){
        super(new enderecoRepository())
    }

    async getById(id){
        return await super.getById(id)
    }
}

module.exports = EnderecoService