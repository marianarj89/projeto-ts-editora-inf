'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('livros', {
      id: {
        type: new Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: new Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: new Sequelize.STRING,
        allowNull: false
    },
    autorId: {
        type: new Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'autores',
            key: 'id'
        }
    },
    price: {
        type: new Sequelize.FLOAT,
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
    await queryInterface.dropTable('livros');
  }
};