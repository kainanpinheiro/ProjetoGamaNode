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
        this.hasOne(models.LivroModel, { foreignKey: 'livro_id', as: 'livro' })
    }

}

module.exports = LocacaoItemModel