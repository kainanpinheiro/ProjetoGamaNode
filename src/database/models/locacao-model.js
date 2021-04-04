const { Model, DataTypes } = require("sequelize");

class LocacaoModel extends Model {
    static init(sequelize) {

        const model = {
            data_agendamento: {
                type: DataTypes.DATE,
            },
            data_retirada: {
                type: DataTypes.DATE,
            },
            data_finalizacao: {
                type: DataTypes.DATE,
            },
            valor_total: {
                type: DataTypes.DOUBLE,
            },
        }
        super.init(model, { sequelize, tableName: 'locacao' })
    }

}

module.exports = LocacaoModel