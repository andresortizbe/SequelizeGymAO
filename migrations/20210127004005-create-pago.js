'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pagos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        
        references: {
          model: 'clientes',
          key: 'id'
        }
      },
      id_membresia: {
        type: Sequelize.INTEGER,
        
        references: {
          model: 'membresia',
          key: 'id'
        }
      },
      valorPagar: {
        type: Sequelize.INTEGER
      },
      fechaPago: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('pagos');
  }
};