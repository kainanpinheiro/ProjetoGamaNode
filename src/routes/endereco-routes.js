const Joi = require('joi');
const enderecoHandler = require('../handlers/endereco-handler');

module.exports = [
  {
    method: 'POST',
    path: '/api/v1/endereco',
    options: {
      handler: enderecoHandler.add,
    },
  },
];
