'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mahasiswas', {
      NIM: {
        type: Sequelize.STRING(11),
        allowNull: false,
        primaryKey: true,
      },
      Nama_Mahasiswa: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      No_HP: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      Email: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      Username: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      Password: {
        type: Sequelize.STRING(50),
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
    await queryInterface.dropTable('Mahasiswas');
  }
};
