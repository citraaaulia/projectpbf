'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('KaRumahtanggas', {
      ID_Ka_Rumahtangga: {
        type: Sequelize.STRING(12),
        allowNull: false,
        primaryKey: true,
      },
      Nama_pegawai: {
        type: Sequelize.STRING(255),
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
    await queryInterface.dropTable('KaRumahtanggas');
  }
};