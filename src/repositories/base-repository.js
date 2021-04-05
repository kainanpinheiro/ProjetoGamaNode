const DbConnection = require('../database');

class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async getAll(include) {
    return await this.model.findAll({ include });
  }

  async getById(id, include) {
    return await this.model.findByPk(id, { include });
  }

  async add(entity, include) {
    return await this.model.create(entity, include);
  }

  async update(id, entity) {
    const result = await this.getById(id);

    Object.assign(result, entity);

    await result.save();

    return result;
  }

  async remove(id) {
    const result = await this.getById(id);

    await result.destroy();

    return { id, removed: true };
  }
}

module.exports = BaseRepository;
