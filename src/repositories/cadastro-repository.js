const CadastroModel = require('../database/models/cadastro-model');
const BaseRepository = require('./base-repository');

class CadastroRepository extends BaseRepository {
  constructor() {
    super(CadastroModel);
  }

  async getByUsername(login) {
    return await CadastroModel.findOne({ where: { login } });
  }
}

module.exports = CadastroRepository;
