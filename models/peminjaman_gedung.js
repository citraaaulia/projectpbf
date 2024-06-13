// models/peminjaman_gedung.js
module.exports = (sequelize, DataTypes) => {
    const PeminjamanGedung = sequelize.define('PeminjamanGedung', {
      Id_Peminjaman: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      NIM: {
        type: DataTypes.STRING(11),
        allowNull: false,
      },
      ID_gedung: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ID_pegawai: {
        type: DataTypes.STRING(12),
        allowNull: false,
      },
      Tanggal_pinjam: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      Tanggal_selesai: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      Status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      Deskripsi: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      Surat_peminjaman: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    }, {});
  
    PeminjamanGedung.associate = (models) => {
      PeminjamanGedung.belongsTo(models.Mahasiswa, { foreignKey: 'NIM' });
      PeminjamanGedung.belongsTo(models.Gedung, { foreignKey: 'ID_gedung' });
      PeminjamanGedung.belongsTo(models.Pegawai, { foreignKey: 'ID_pegawai' });
      PeminjamanGedung.hasMany(models.History, { foreignKey: 'ID_peminjaman' });
      PeminjamanGedung.hasMany(models.Disposisi, { foreignKey: 'ID_Peminjaman' });
    };
  
    return PeminjamanGedung;
  };
  