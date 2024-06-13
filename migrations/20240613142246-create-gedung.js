'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Gedungs', {
      ID_gedung: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      Nama_gedung: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      Lokasi: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      Kapasitas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status_gedung: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Gedungs');
  }
};
