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
        data_agendamento: {
          type: Sequelize.DATE,
          allowNull: false
        },
        data_retirada: {
          type: Sequelize.DATE,
        },
        data_finalizacao: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        valor_total: {
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
