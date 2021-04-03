const Joi = require("joi");
const enderecoHandler = require("../handlers/enderecoHandler");

module.exports = [
  {
      method: 'POST',
      path: '/api/v1/endereco',
      options: {
          handler: enderecoHandler.add,
      }
  }
]