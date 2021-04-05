const Joi = require('joi');
const CadastroHandler = require('../handlers/cadastro-handler');

module.exports = [
  {
    method: 'GET',
    path: '/api/v1/cadastro',
    options: {
      handler: CadastroHandler.getAll,
      description: 'Obtem todos os cadastros',
      notes: 'Retorna uma lista de cadastros',
      tags: ['api', 'Cadastro'],
    },
  },
  {
    method: 'GET',
    path: '/api/v1/cadastro/{id}',
    options: {
      handler: CadastroHandler.getById,
      description: 'Obtem um cadastro',
      notes: 'Retorna um cadastro',
      tags: ['api', 'Cadastro'],
    },
  },
  {
    method: 'POST',
    path: '/api/v1/cadastro',
    options: {
      handler: CadastroHandler.add,
      description: 'Cria um novo cadastro',
      notes: 'Retorna o cadastro adicionado',
      tags: ['api', 'Cadastro'],
      auth: false,
      validate: {
        payload: Joi.object({
          cpf: Joi.string().min(5).max(20).required(),
          nome: Joi.string().min(5).max(50).required(),
          email: Joi.string().min(5).max(50).required(),
          telefone: Joi.string().min(5).max(20).required(),
          login: Joi.string().min(5).max(20).required(),
          senha: Joi.string().min(5).max(50).required(),
          cep: Joi.string().min(5).max(50).required(),
        }),
      },
    },
  },
];
