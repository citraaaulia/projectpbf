// models/surat_disposisi.js
module.exports = (sequelize, DataTypes) => {
    const SuratDisposisi = sequelize.define('SuratDisposisi', {
      ID_suratdisposisi: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      ID_Disposisi: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ID_karumahtangga: {
        type: DataTypes.STRING(12),
        allowNull: false,
      },
      ID_pegawai: {
        type: DataTypes.STRING(12),
        allowNull: false,
      },
      nomor_surat: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      perihal: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      keterangan: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      tanggal_surat: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    }, {});
  
    SuratDisposisi.associate = (models) => {
      SuratDisposisi.belongsTo(models.Disposisi, { foreignKey: 'ID_Disposisi' });
      SuratDisposisi.belongsTo(models.Pegawai, { foreignKey: 'ID_pegawai' });
      SuratDisposisi.hasMany(models.History, { foreignKey: 'ID_suratdisposisi' });
    };
  
    return SuratDisposisi;
  };
  