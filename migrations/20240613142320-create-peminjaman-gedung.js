'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PeminjamanGedungs', {
      Id_Peminjaman: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      NIM: {
        type: Sequelize.STRING(11),
        allowNull: false,
        references: {
          model: 'Mahasiswas',
          key: 'NIM',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      ID_gedung: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Gedungs',
          key: 'ID_gedung',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      ID_pegawai: {
        type: Sequelize.STRING(12),
        allowNull: false,
        references: {
          model: 'Pegawais',
          key: 'ID_pegawai',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      Tanggal_pinjam: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      Tanggal_selesai: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      Status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      Deskripsi: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      Surat_peminjaman: {
        type: Sequelize.STRING(255),
        allowNull: true,
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
    await queryInterface.dropTable('PeminjamanGedungs');
  }
};
