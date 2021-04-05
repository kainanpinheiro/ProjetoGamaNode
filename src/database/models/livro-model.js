const { Model, DataTypes } = require('sequelize');

class LivroModel extends Model {
  static init(sequelize) {
    const model = {
      isbn: {
        type: DataTypes.STRING,
      },
      titulo: {
        type: DataTypes.STRING,
      },
      valor_diaria: {
        type: DataTypes.FLOAT,
      },
      exemplares: {
        type: DataTypes.INTEGER,
      },
      reservados: {
        type: DataTypes.INTEGER,
      },
    };
    super.init(model, { sequelize, tableName: 'livro' });
  }
  static associate(models) {
    this.hasMany(models.LocacaoItemModel, { foreignKey: 'livro_id', as: 'locacaoitem' })
  }
}

module.exports = LivroModel;
