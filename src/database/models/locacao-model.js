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
            status: {
                type: DataTypes.STRING,
            },
        }
        super.init(model, { sequelize, tableName: 'locacao' })
    }

    static associate(models) {
        this.hasMany(models.LocacaoItemModel, { foreignKey: 'locacao_id', as: 'locacaoitem' })
    }
    static associate(models) {
        this.belongsTo(models.LocacaoModel, { foreignKey: 'cadastro_id', as: 'cadastro' })
    }

}

module.exports = LocacaoModel