// models/gedung.js
module.exports = (sequelize, DataTypes) => {
    const Gedung = sequelize.define('Gedung', {
      ID_gedung: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      Nama_gedung: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      Lokasi: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      Kapasitas: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status_gedung: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    }, {});
  
    Gedung.associate = (models) => {
      Gedung.hasMany(models.PeminjamanGedung, { foreignKey: 'ID_gedung' });
    };
  
    return Gedung;
  };
  