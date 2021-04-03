'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('livro',
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      isbn: {
        type: Sequelize.STRING,
        allowNull: false
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      valor_diaria: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      exemplares: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      reservados: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      }
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('livro');
  }
};