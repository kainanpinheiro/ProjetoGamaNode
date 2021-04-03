const Joi = require("joi");
const LivroHandler = require("../handlers/livro-handler");

module.exports = [

    {
        method: 'GET',
        path: '/api/v1/livro',
        handler: LivroHandler.getAll
    },
    {
        method: 'GET',
        path: '/api/v1/livro/{id}',
        handler: LivroHandler.getById,
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.string().guid().required()
                })
            }
        }
    },
    {
        method: 'POST',
        path: '/api/v1/livro',
        handler: LivroHandler.add,
        options: {
            validate: {
                payload: Joi.object({
                    isbn: Joi.string().min(5).max(50).required(),
                    titulo: Joi.string().min(5).max(50).required(),
                    valor_diaria: Joi.number().required(),
                    exemplares: Joi.number().required(),
                    reservados: Joi.number().required()
                })
            }
        }
    },
    {
        method: 'PUT',
        path: '/api/v1/livro/{id}',
        handler: LivroHandler.update,
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.string().guid().required()
                }),
                payload: Joi.object({
                    nome: Joi.string().min(5).max(50).required(),
                })
            }
        }
    },
    {
        method: 'DELETE',
        path: '/api/v1/livro/{id}',
        handler: LivroHandler.remove,
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.string().guid().required()
                })
            }
        }
    },
    {
        method: 'PATCH',
        path: '/api/v1/livro/{id}',
        handler: LivroHandler.changeStatus,
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.string().guid().required()
                }),
                payload: Joi.object({
                    active: Joi.boolean().required()
                })
            }
        }
    }
]