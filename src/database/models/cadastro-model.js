const { Model, DataTypes } = require("sequelize");

class CadastroModel extends Model {
  static init(sequelize) {

    const model = {
      cpf: {
        type: DataTypes.STRING
      },
      nome: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      telefone: {
        type: DataTypes.STRING
      },
      login: {
        type: DataTypes.STRING
      },
      senha: {
        type: DataTypes.STRING
      }
    }
    super.init(model, { sequelize, tableName: 'cadastro' })
  }

  static associate(models) {
    this.belongsTo(models.EnderecoModel, { foreignKey: 'endereco_id', as: 'endereco' })
  }

  static associate(models) {
    this.hasMany(models.LocacaoModel, { foreignKey: 'cadastro_id', as: 'locacao' })
  }

}

module.exports = CadastroModel