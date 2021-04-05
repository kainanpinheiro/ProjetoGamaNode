const { Model, DataTypes } = require('sequelize');
const { username } = require('../config/postgres');
const bcrypt = require('bcryptjs');

class CadastroModel extends Model {
  static init(sequelize) {
    const model = {
      cpf: {
        type: DataTypes.STRING,
      },
      nome: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      telefone: {
        type: DataTypes.STRING,
      },
      login: {
        type: DataTypes.STRING,
      },
      senha_hash: {
        type: DataTypes.VIRTUAL,
      },
      senha: {
        type: DataTypes.STRING,
      },
    };
    super.init(model, { sequelize, tableName: 'cadastro' });

    this.addHook('beforeSave', async (cadastro) => {
      if (cadastro.senha_hash) {
        cadastro.senha = await bcrypt.hash(cadastro.senha_hash, 8);
      }
    });
  }

  static associate(models) {
    this.belongsTo(models.EnderecoModel, {
      foreignKey: 'endereco_id',
      as: 'endereco',
    });
  }

  checkPassword(senha_hash) {
    return bcrypt.compare(senha_hash, this.senha);
  }
}

module.exports = CadastroModel;
