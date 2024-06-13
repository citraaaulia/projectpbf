'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Disposisis', {
      ID_Disposisi: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      ID_Peminjaman: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'PeminjamanGedungs',
          key: 'Id_Peminjaman',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      ID_karumahtangga: {
        type: Sequelize.STRING(12),
        allowNull: false,
        references: {
          model: 'KaRumahtanggas',
          key: 'ID_Ka_Rumahtangga',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      catatan: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      Tanggal_disposisi: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('Disposisis');
  }
};
