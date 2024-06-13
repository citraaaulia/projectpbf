// models/ka_rumahtangga.js
module.exports = (sequelize, DataTypes) => {
    const KaRumahtangga = sequelize.define('KaRumahtangga', {
      ID_Ka_Rumahtangga: {
        type: DataTypes.STRING(12),
        primaryKey: true,
      },
      Nama_pegawai: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    }, {});
  
    KaRumahtangga.associate = (models) => {
      KaRumahtangga.hasMany(models.Disposisi, { foreignKey: 'ID_karumahtangga' });
    };
  
    return KaRumahtangga;
  };
  