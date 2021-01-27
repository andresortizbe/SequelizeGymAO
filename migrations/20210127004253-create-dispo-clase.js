'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dispo_clases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_clase: {
        type: Sequelize.INTEGER,
        references: {
          model: 'clases',
          key: 'id'
        }
      },
      dia_sem: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.DATE
      },
      hora_ini: {
        type: Sequelize.TIME
      },
      hora_fin: {
        type: Sequelize.TIME
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dispo_clases');
  }
};