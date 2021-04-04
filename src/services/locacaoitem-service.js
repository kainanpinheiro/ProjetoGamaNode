const BaseService = require("./base-service")
const LocacaoItemRepository = require('../repositories/locacaoitem-repository')

class LocacaoItemService extends BaseService {

    constructor() {
        super(new LocacaoItemRepository())
    }
}

module.exports = LocacaoItemService