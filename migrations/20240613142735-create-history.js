'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Histories', {
      ID_history: {
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
      ID_peminjaman: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'PeminjamanGedungs',
          key: 'Id_Peminjaman',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      ID_suratdisposisi: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'SuratDisposisis',
          key: 'ID_suratdisposisi',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('Histories');
  }
};
