'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cadastro',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        cpf: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        telefone: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        login: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        endereco_id: {
          type: Sequelize.INTEGER,
          references: { model: 'endereco', key: 'id' },
          allowNull: false
        },
        senha: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        }
      })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cadastro')
  }
};