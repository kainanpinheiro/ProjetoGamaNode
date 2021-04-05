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
          type: Sequelize.STRING(14),
          allowNull: false,
          unique: true
        },
        titulo: {
          type: Sequelize.STRING(50),
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
        }

      })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('livro');
  }
};
