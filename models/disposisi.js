// models/disposisi.js
module.exports = (sequelize, DataTypes) => {
    const Disposisi = sequelize.define('Disposisi', {
      ID_Disposisi: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      ID_Peminjaman: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ID_karumahtangga: {
        type: DataTypes.STRING(12),
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      catatan: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      Tanggal_disposisi: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    }, {});
  
    Disposisi.associate = (models) => {
      Disposisi.belongsTo(models.PeminjamanGedung, { foreignKey: 'ID_Peminjaman' });
      Disposisi.hasMany(models.SuratDisposisi, { foreignKey: 'ID_Disposisi' });
      Disposisi.hasMany(models.History, { foreignKey: 'ID_Disposisi' });
      Disposisi.belongsTo(models.Ka_Rumahtangga, { foreignKey: 'ID_karumahtangga' });
    };
  
    return Disposisi;
  };
  