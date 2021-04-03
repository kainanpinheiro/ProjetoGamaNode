const { Model, DataTypes } = require("sequelize");

class EnderecoModel extends Model {
  static init(sequelize) {

    const model = {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      cep: {
        type: DataTypes.STRING,
      },
      logradouro: {
        type: DataTypes.STRING,
      },
      bairro: {
        type: DataTypes.STRING,
      },
      localidade: {
        type: DataTypes.STRING,
      },
      uf: {
        type: DataTypes.STRING,
      },
      ibge: {
        type: DataTypes.STRING,
      }
    }
    super.init(model, { sequelize, tableName: 'cadastro' })
  }

  static associate(models) {
    this.belongsTo(models.EnderecoModel, { foreignKey: 'endereco_id', as: 'endereco' })
  }
}

module.exports = EnderecoModel