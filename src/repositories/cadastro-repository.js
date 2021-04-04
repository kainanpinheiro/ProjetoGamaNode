const CadastroModel = require('../database/models/cadastro-model');
const BaseRepository = require('./base-repository')

class CadastroRepository extends BaseRepository {
  constructor() {
    super(CadastroModel);
  }
}

module.exports = CadastroRepository;
