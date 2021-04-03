const BaseHandler = require('./baseHandler');
const enderecoService = require('../services/endereco-service');

class EnderecoHandler extends BaseHandler {
  constructor() {
    super(new enderecoService());
  }
}

module.exports = new EnderecoHandler();
