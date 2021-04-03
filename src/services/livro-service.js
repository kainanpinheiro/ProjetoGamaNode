const BaseService = require("./base-service")
const LivroRepository = require('../repositories/livro-repository')


class LivroService extends BaseService {

    constructor() {
        super(new LivroRepository())
    }
}

module.exports = LivroService