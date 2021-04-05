'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cadastro', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      cpf: {
        type: Sequelize.STRING(14),
        allowNull: false,
        unique: true,
      },
      nome: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      login: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      endereco_id: {
        type: Sequelize.INTEGER,
        references: { model: 'endereco', key: 'id' },
        allowNull: false,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cadastro');
  },
};
