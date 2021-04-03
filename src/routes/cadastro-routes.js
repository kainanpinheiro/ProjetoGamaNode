const Joi = require('joi');
const cadastroHandler = require('../handlers/cadastro-handler');

module.exports = [
  {
    method: 'POST',
    path: '/api/v1/cadastro',
    options: {
      handler: cadastroHandler.add,
      options: {
        validate: {
          payload: Joi.object({
            isbn: Joi.string().min(5).max(50).required(),
            titulo: Joi.string().min(5).max(50).required(),
            valor_diaria: Joi.number().required(),
            exemplares: Joi.number().required(),
            reservados: Joi.number().required(),
          }),
        },
      },
    },
  },
];
