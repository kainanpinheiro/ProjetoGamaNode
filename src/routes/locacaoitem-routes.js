const Joi = require("joi");
const LocacaoItemHandler = require("../handlers/locacaoitem-handler");

module.exports = [

    {
        method: 'GET',
        path: '/api/v1/locacaoitem',
        handler: LocacaoItemHandler.getAll
    },
    {
        method: 'GET',
        path: '/api/v1/locacaoitem/{id}',
        handler: LocacaoItemHandler.getById,
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
        path: '/api/v1/locacaoitem',
        handler: LocacaoItemHandler.add,
        options: {
            validate: {
                payload: Joi.object({
                    data_entrega: Joi.date(),
                    data_previsao_entrega: Joi.date(),
                    diarias: Joi.number(),
                    valor_diaria: Joi.number(),
                    valor_locacao: Joi.number()
                    // livro_id: Joi.number().required()
                })
            }
        }
    },
    {
        method: 'PUT',
        path: '/api/v1/locacaoitem/{id}',
        handler: LocacaoItemHandler.update,
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
        path: '/api/v1/locacaoitem/{id}',
        handler: LocacaoItemHandler.remove,
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
        path: '/api/v1/locacaoitem/{id}',
        handler: LocacaoItemHandler.changeStatus,
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