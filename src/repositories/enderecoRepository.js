const enderecoModel = require('../database/models/EnderecoModel');
const BaseRepository = require('./baseRepository');

class EnderecoRepository extends BaseRepository {
  constructor() {
    super(enderecoModel);
  }
}

module.exports = EnderecoRepository;
