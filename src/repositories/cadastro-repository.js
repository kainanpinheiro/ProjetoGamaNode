const cadastroModel = require('../database/models/cadastro-model');
const baseRepository = require('./baseRepository');

class CadastroRepository extends baseRepository {
  constructor() {
    super(cadastroModel);
  }
}

module.exports = CadastroRepository;
