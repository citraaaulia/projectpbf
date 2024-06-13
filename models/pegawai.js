// models/pegawai.js
module.exports = (sequelize, DataTypes) => {
    const Pegawai = sequelize.define('Pegawai', {
      ID_pegawai: {
        type: DataTypes.STRING(12),
        primaryKey: true,
      },
      Nama_pegawai: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    }, {});
  
    Pegawai.associate = (models) => {
      Pegawai.hasMany(models.PeminjamanGedung, { foreignKey: 'ID_pegawai' });
      Pegawai.hasMany(models.SuratDisposisi, { foreignKey: 'ID_pegawai' });
    };
  
    return Pegawai;
  };
  