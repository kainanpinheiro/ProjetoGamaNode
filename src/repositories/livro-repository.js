const LivroModel = require('../database/models/livro-model')
const BaseRepository = require('./base-repository')

class LivroRepository extends BaseRepository {

    constructor() {
        super(LivroModel)
    }
}

module.exports = LivroRepository