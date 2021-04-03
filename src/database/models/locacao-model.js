const { Model, DataTypes } = require("sequelize");

class LocacaoModel extends Model {
    static init(sequelize) {

        const model = {
            dataAgendamento: {
                type: DataTypes.DATE,
            },
            dataRetirada: {
                type: DataTypes.DATE,
            },
            dataFinalizacao: {
                type: DataTypes.DATE,
            },
            valorTotal: {
                type: DataTypes.DOUBLE,
            },
        }
        super.init(model, { sequelize, tableName: 'locacao' })
    }

}

module.exports = LocacaoModel