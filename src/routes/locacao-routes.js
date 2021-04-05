const Joi = require('joi');
const LocacaoHandler = require('../handlers/locacao-handler');

module.exports = [
    {
        method: 'GET',
        path: '/api/v1/locacao',
        options: {
            handler: LocacaoHandler.getAll,
            description: 'Obtem todos as locações',
            notes: 'Retorna uma lista de locações',
            tags: ['api', 'Locação'],
        },
    },
    {
        method: 'GET',
        path: '/api/v1/locacao/{id}',
        options: {
            handler: LocacaoHandler.getById,
            description: 'Obtem uma locação',
            notes: 'Retorna uma locação',
            tags: ['api', 'Locação'],
            validate: {
                params: Joi.object({
                    id: Joi.string().guid().required(),
                }),
            },
        },
    },
    {
        method: 'POST',
        path: '/api/v1/locacao',
        options: {
            handler: LocacaoHandler.add,
            description: 'Adiciona uma locação',
            notes: 'Retorna a locação adicionada',
            tags: ['api', 'Locação'],
            validate: {
                payload: Joi.object({
                    data_agendamento: Joi.date(),
                    data_finalizacao: Joi.date(),
                    valor_total: Joi.number(),
                }),
            },
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
        method: 'DELETE',
        path: '/api/v1/locacao/{id}',
        handler: LocacaoHandler.remove,
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.string().guid().required(),
                }),
            },
        },
    },
    {
        method: 'PATCH',
        path: '/api/v1/locacao/{id}',
        handler: LocacaoHandler.changeStatus,
        options: {
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
