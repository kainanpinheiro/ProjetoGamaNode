const Joi = require('joi');
const LivroHandler = require('../handlers/livro-handler');

module.exports = [
  {
    method: 'GET',
    path: '/api/v1/livro',
    options: {
      handler: LivroHandler.getAll,
      description: 'Obtem todos os livros',
      notes: 'Retorna uma lista de livros',
      tags: ['api', 'Livro'],
      validate: {
        headers: Joi.object({
          authorization: Joi.string().required(),
        }).options({ allowUnknown: true }),
      },
    },
  },
  {
    method: 'GET',
    path: '/api/v1/livro/{id}',
    options: {
      handler: LivroHandler.getById,
      description: 'Obtem um livro',
      notes: 'Retorna um livro',
      tags: ['api', 'Livro'],
      validate: {
        headers: Joi.object({
          authorization: Joi.string().required(),
        }).options({ allowUnknown: true }),
        params: Joi.object({
          id: Joi.number().required(),
        }),
      },
    },
  },
  {
    method: 'POST',
    path: '/api/v1/livro',
    options: {
      handler: LivroHandler.add,
      description: 'Cria um novo livro',
      notes: 'Retorna o livro adicionado',
      tags: ['api', 'Livro'],
      validate: {
        headers: Joi.object({
          authorization: Joi.string().required(),
        }).options({ allowUnknown: true }),
        payload: Joi.object({
          isbn: Joi.string().min(5).max(50).required(),
          titulo: Joi.string().min(5).max(50).required(),
          valor_diaria: Joi.number().required(),
          exemplares: Joi.number().required(),
        }),
      },
    },
  },
];
