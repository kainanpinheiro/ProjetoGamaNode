const LocacaoItemModel = require('../database/models/locacaoitem-model')
const BaseRepository = require('./base-repository')

class LocacaoItemRepository extends BaseRepository {

    constructor() {
        super(LocacaoItemModel)
    }
}

module.exports = LocacaoItemRepository