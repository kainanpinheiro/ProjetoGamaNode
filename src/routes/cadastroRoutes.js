const Joi = require("joi");
const cadastroHandler = require("../handlers/cadastroHandler");

module.exports = [
  {
      method: 'POST',
      path: '/api/v1/cadastro',
      options: {
          handler: cadastroHandler.add,
      }
  }
]