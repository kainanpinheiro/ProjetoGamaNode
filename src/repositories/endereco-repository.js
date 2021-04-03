const enderecoModel = require('../database/models/endereco-model');
const BaseRepository = require('./baseRepository');

class EnderecoRepository extends BaseRepository {
  constructor() {
    super(enderecoModel);
  }
}

module.exports = EnderecoRepository;
