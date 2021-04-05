const EnderecoModel = require('../database/models/endereco-model');
const BaseRepository = require('./base-repository')

class EnderecoRepository extends BaseRepository {
  constructor() {
    super(EnderecoModel);
  }
}

module.exports = EnderecoRepository;
