class BaseService {

    constructor(repository) {
        this.repository = repository
    }

    async getAll(query) {
        return await this.repository.getAll(query)
    }

    async getById(id, include) {
        return await this.repository.getById(id, include)
    }

    async add(payload) {
        return await this.repository.add(payload)
    }

    async update(id, payload) {
        return await this.repository.update(id, payload)
    }

    async remove(id) {
        return await this.repository.remove(id)
    }
}

module.exports = BaseService