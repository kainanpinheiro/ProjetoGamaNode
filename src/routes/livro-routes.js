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
    },
  },
  {
    method: 'GET',
    path: '/api/v1/livro/{id}',
    options: {
      handler: LivroHandler.getById,
      description: 'Obtem um livros',
      notes: 'Retorna um livro',
      tags: ['api', 'Livro'],
      validate: {
        params: Joi.object({
          id: Joi.string().guid().required(),
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
  {
    method: 'PUT',
    path: '/api/v1/livro/{id}',
    options: {
      handler: LivroHandler.update,
      description: 'Atualiza um livro',
      notes: 'Retorna o livro atualizado',
      tags: ['api', 'Livro'],
      validate: {
        params: Joi.object({
          id: Joi.string().guid().required(),
        }),
        payload: Joi.object({
          nome: Joi.string().min(5).max(50).required(),
        }),
      },
    },
  },
  {
    method: 'DELETE',
    path: '/api/v1/livro/{id}',
    options: {
      handler: LivroHandler.remove,
      description: 'Deleta um livro',
      notes: 'Retorna o id',
      tags: ['api', 'Livro'],
      validate: {
        params: Joi.object({
          id: Joi.string().guid().required(),
        }),
      },
    },
  },
  {
    method: 'PATCH',
    path: '/api/v1/livro/{id}',
    options: {
      handler: LivroHandler.changeStatus,
      validate: {
        params: Joi.object({
          id: Joi.string().guid().required(),
        }),
        payload: Joi.object({
          active: Joi.boolean().required(),
        }),
      },
    },
  },
];
