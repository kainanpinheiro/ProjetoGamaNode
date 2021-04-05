const LivroService = require("../services/livro-service");
const BaseHandler = require("./base-handler");

class LivroHandler extends BaseHandler {

    constructor() {
        super(new LivroService())
    }
}

module.exports = new LivroHandler()