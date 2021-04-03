const LocacaoModel = require('../database/models/locacao-model')
const BaseRepository = require('./base-repository')

class LocacaoRepository extends BaseRepository {

    constructor() {
        super(LocacaoModel)
    }
}

module.exports = LocacaoRepository