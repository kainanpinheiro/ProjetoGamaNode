const { v4: uuidv4 } = require('uuid');

class BaseService {
  constructor(repository) {
    this.repository = repository;
  }

  async getAll(query) {
    if (query.active) query.active = query.active == 'true';

    return await this.repository.getAll(query);
  }

  async getById(id, include) {
    return await this.repository.getById(id, include);
  }

  async add(payload) {
    return await this.repository.add(payload);
  }

  async update(id, payload) {
    return await this.repository.update(id, payload);
  }

  async remove(id) {
    return await this.repository.remove(id);
  }

  async changeStatus(id, status) {
    return await this.repository.changeStatus(id, status);
  }
}

module.exports = BaseService;
