const BaseService = require('./base-service');
const LivroRepository = require('../repositories/livro-repository');

class LivroService extends BaseService {
  constructor() {
    super(new LivroRepository());
  }

  async getAll() {
    return await super.getAll();
  }
}

module.exports = LivroService;
