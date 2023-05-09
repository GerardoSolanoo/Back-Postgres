'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Wizards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      casa: {
        type: Sequelize.STRING
      },
      materia: {
        type: Sequelize.STRING
      },
      patronus: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Wizards');
  }
};