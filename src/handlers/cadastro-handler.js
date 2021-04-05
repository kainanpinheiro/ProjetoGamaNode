const BaseHandler = require('./base-handler');
const CadastroService = require('../services/cadastro-service');

class CadastroHandler extends BaseHandler {
  constructor() {
    super(new CadastroService());
  }
}

module.exports = new CadastroHandler();
