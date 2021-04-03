class BaseHandler {

    constructor(service) {
        this.service = service
    }

    getAll = async (req, h) => {

        try {
            return await this.service.getAll(req.query)
        } catch (err) {
            console.error(err)
            return err
        }
    }

    getById = async (req, h) => {
        try {
            return await this.service.getById(req.params.id)
        } catch (err) {
            console.error(err)
            return err
        }
    }

    add = async (req, h) => {
        try {
            return await this.service.add(req.payload)
        } catch (err) {
            console.error(err)
            return err
        }
    }

    update = async (req, h) => {
        try {
            return await this.service.update(req.params.id, req.payload)
        } catch (err) {
            console.log(err)
            return err
        }
    }

    remove = async (req, h) => {
        try {
            return await this.service.remove(req.params.id)
        } catch (err) {
            console.log(err)
            return err
        }
    }

    changeStatus = async (req, h) => {
        try {
            return await this.service.changeStatus(req.params.id, req.payload.active)
        } catch (err) {
            console.log(err)
            return err
        }
    }
}

module.exports = BaseHandler