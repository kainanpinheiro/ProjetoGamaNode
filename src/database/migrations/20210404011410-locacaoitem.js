'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('locacaoitem',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        data_entrega: {
          type: Sequelize.DATE,
          allowNull: true
        },
        data_previsao_entrega: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        diarias: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        valor_diaria: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        valor_locacao: {
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
        },
        active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true
        },
        livro_id: {
          type: Sequelize.INTEGER,
          references: { model: 'livro', key: 'id' },
        },
        locacao_id: {
          type: Sequelize.INTEGER,
          references: { model: 'locacao', key: 'id' },
        }

      })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('locacaoitem');
  }
};
