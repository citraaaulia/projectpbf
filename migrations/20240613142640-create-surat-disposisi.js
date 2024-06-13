'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SuratDisposisis', {
      ID_suratdisposisi: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      ID_Disposisi: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Disposisis',
          key: 'ID_Disposisi',
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
      nomor_surat: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      perihal: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      keterangan: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      tanggal_surat: {
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
    await queryInterface.dropTable('SuratDisposisis');
  }
};
