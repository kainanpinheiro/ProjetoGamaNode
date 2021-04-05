const { Sequelize } = require('sequelize');
const DbConfig = require('../database/config/postgres');
const dotenv = require('dotenv');
const CadastroModel = require('./models/cadastro-model');
const EnderecoModel = require('./models/endereco-model');
const LivroModel = require('./models/livro-model');
const LocacaoModel = require('./models/locacao-model');
const LocacaoItemModel = require('./models/locacaoitem-model');

dotenv.config();

const connection = new Sequelize(DbConfig);

CadastroModel.init(connection);
EnderecoModel.init(connection);
LivroModel.init(connection);
LocacaoModel.init(connection);
LocacaoItemModel.init(connection);

CadastroModel.associate(connection.models);
LocacaoItemModel.associate(connection.models);
LivroModel.associate(connection.models);
LocacaoModel.associate(connection.models);

module.exports = connection;
