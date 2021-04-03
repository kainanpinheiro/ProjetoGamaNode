'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('locacao',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        dataagendamento: {
          type: Sequelize.DATE,
          allowNull: false
        },
        dataretirada: {
          type: Sequelize.DATE,
        },
        datafinalizacao: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        valorTotal: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }

      })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('locacao');
  }
};
