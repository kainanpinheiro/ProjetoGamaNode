const { Model, DataTypes } = require("sequelize");

class EnderecoModel extends Model {
  static init(sequelize){

    const model = {
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
        type: DataTypes.INTEGER,
      }
    }
    super.init(model, {sequelize, tableName: 'endereco'})
  }
}

module.exports = EnderecoModel