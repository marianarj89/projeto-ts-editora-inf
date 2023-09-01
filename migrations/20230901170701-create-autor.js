'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('autores', {
      id: {
        type: new Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: new Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: new Sequelize.STRING,
        allowNull: false
    },
    username: {
        type: new Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: new Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: new Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
    updatedAt: {
        type: new Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('autores');
  }
};