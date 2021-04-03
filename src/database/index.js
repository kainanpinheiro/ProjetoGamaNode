const { Sequelize } = require("sequelize")
const DbConfig = require('../database/config/postgres.js')
const dotenv = require('dotenv')
const CadastroModel = require("./models/CadastroModel")
const EnderecoModel = require("./models/EnderecoModel")
const LivroModel = require("./models/LivroModel")

dotenv.config()

const connection = new Sequelize(DbConfig)

CadastroModel.init(connection)
EnderecoModel.init(connection)
LivroModel.init(connection)

CadastroModel.associate(connection.models)

module.exports = connection