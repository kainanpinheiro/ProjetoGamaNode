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
                    id: Joi.number().required(),
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
                    cadastro_id: Joi.number().required(),
                    data_previsao_entrega: Joi.date(),
                    livro_id: Joi.array()
                        .items({
                            id: Joi.number().required()
                        })
                }),
            },
        },
    },
    {
        method: 'PUT',
        path: '/api/v1/locacao/retirar/{id}',
        options: {
            handler: LocacaoHandler.retirar,
            description: 'Atualiza a locação para retirado',
            notes: 'Retorna a locação atualizada',
            tags: ['api', 'Locação'],
            validate: {
                params: Joi.object({
                    id: Joi.number().required(),
                }),
            },
        },
    },
    {
        method: 'PUT',
        path: '/api/v1/locacao/devolver/{id}',
        options: {
            handler: LocacaoHandler.devolver,
            description: 'Atualiza a locação para finalizado',
            notes: 'Retorna a locação atualizada',
            tags: ['api', 'Locação'],
            validate: {
                params: Joi.object({
                    id: Joi.number().required(),
                }),
            },
        },
    },
];
