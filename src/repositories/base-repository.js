class BaseRepository {

    constructor(model) {
        this.model = model
    }

    async getAll(query) {
        console.log(query)

        return await this.model.findAll({ where: { ...query } })
    }

    async getById(id, include) {
        return await this.model.findByPk(id, { include })
    }

    async add(entity) {
        return await this.model.create(entity)
    }

    async update(id, entity) {

        const result = await this.getById(id)

        Object.assign(result, entity)

        await result.save()

        return result
    }

    async remove(id) {

        const result = await this.getById(id)

        await result.destroy()

        return { id, removed: true }
    }

    async changeStatus(id, status) {

        const result = await this.getById(id)

        result.active = status

        await result.save()

        return result
    }
}

module.exports = BaseRepository