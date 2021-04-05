'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('endereco', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      cep: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      logradouro: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      bairro: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      localidade: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      uf: {
        type: Sequelize.STRING(3),
        allowNull: false,
      },
      ibge: {
        type: Sequelize.INTEGER(50),
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
    await queryInterface.dropTable('endereco');
  },
};
