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
        status: {
          type: Sequelize.STRING(1),
          allowNull: false,
        },
        active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        cadastro_id: {
          type: Sequelize.INTEGER,
          references: { model: 'cadastro', key: 'id' },
        }

      })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('locacao');
  }
};
