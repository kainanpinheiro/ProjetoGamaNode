const cadastroModel = require('../database/models/CadastroModel');
const baseRepository = require('./baseRepository');

class CadastroRepository extends baseRepository {
  constructor() {
    super(cadastroModel);
  }
}

module.exports = CadastroRepository;
