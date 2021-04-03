const { Sequelize } = require('sequelize');
const DbConfig = require('../database/config/postgres');
const dotenv = require('dotenv');
const CadastroModel = require('./models/CadastroModel');
const EnderecoModel = require('./models/EnderecoModel');
const LivroModel = require('./models/livro-model');
const LocacaoModel = require('./models/locacao-model');

dotenv.config();

const connection = new Sequelize(DbConfig);

CadastroModel.init(connection);
EnderecoModel.init(connection);
LivroModel.init(connection);
LocacaoModel.init(connection);

CadastroModel.associate(connection.models);
// EnderecoModel.associate(connection.models)

module.exports = connection;
