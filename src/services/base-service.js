class BaseService {
  constructor(repository) {
    this.repository = repository;
  }

  async getAll(query, include) {
    if (query.active) query.active = query.active == 'true';
    return await this.repository.getAll(query, include);
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
