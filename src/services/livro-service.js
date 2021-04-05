const BaseService = require('./base-service');
const LivroRepository = require('../repositories/livro-repository');

class LivroService extends BaseService {
  constructor() {
    super(new LivroRepository());
  }

  async getAll() {
    return await super.getAll();
  }

  async add(payload) {
    payload.reservados = 0;
    const insert = await super.add(payload);

    return await super.getById(insert.id);
  }
}

module.exports = LivroService;
