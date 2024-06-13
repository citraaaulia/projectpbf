// models/mahasiswa.js
module.exports = (sequelize, DataTypes) => {
    const Mahasiswa = sequelize.define('Mahasiswa', {
      NIM: {
        type: DataTypes.STRING(11),
        primaryKey: true,
      },
      Nama_Mahasiswa: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      No_HP: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      Email: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      Username: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      Password: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    }, {});
  
    Mahasiswa.associate = (models) => {
      Mahasiswa.hasMany(models.PeminjamanGedung, { foreignKey: 'NIM' });
      Mahasiswa.hasMany(models.History, { foreignKey: 'NIM' });
    };
  
    return Mahasiswa;
  };
  