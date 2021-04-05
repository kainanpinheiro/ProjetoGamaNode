const Joi = require("joi");
const LocacaoHandler = require("../handlers/locacao-handler");

module.exports = [

    {
        method: 'GET',
        path: '/api/v1/locacao',
        handler: LocacaoHandler.getAll
    },
    {
        method: 'GET',
        path: '/api/v1/locacao/{id}',
        handler: LocacaoHandler.getById,
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
        path: '/api/v1/locacao',
        handler: LocacaoHandler.add,
        options: {
            validate: {
                payload: Joi.object({
                    data_agendamento: Joi.date(),
                    data_finalizacao: Joi.date(),
                    valor_total: Joi.number(),
                    status: Joi.string().min(1).max(1).required(),
                    cadastro_id: Joi.number().required()
                })
            }
        }
    },
    {
        method: 'PUT',
        path: '/api/v1/locacao/{id}',
        handler: LocacaoHandler.update,
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
        path: '/api/v1/locacao/{id}',
        handler: LocacaoHandler.remove,
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
        path: '/api/v1/locacao/{id}',
        handler: LocacaoHandler.changeStatus,
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