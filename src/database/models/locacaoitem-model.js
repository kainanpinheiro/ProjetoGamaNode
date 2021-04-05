const { Model, DataTypes } = require("sequelize");

class LocacaoItemModel extends Model {
    static init(sequelize) {

        const model = {
            data_entrega: {
                type: DataTypes.DATE,
            },
            data_previsao_entrega: {
                type: DataTypes.DATE,
            },
            diarias: {
                type: DataTypes.INTEGER,
            },
            valor_diaria: {
                type: DataTypes.DOUBLE,
            },
            valor_locacao: {
                type: DataTypes.DOUBLE,
            },
        }
        super.init(model, { sequelize, tableName: 'locacaoitem' })
    }

    static associate(models) {
        this.belongsTo(models.LivroModel, { foreignKey: 'livro_id', as: 'livro' })
    }

    static associate(models) {
        this.belongsTo(models.LocacaoModel, { foreignKey: 'locacao_id', as: 'locacao' })
    }

}

module.exports = LocacaoItemModel