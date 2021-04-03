const BaseHandler = require('./baseHandler');
const cadastroService = require('../services/cadastro-service.js');

class CadastroHandler extends BaseHandler {
  constructor() {
    super(new cadastroService());
  }
}

module.exports = new CadastroHandler();
