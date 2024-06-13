// models/history.js
module.exports = (sequelize, DataTypes) => {
    const History = sequelize.define('History', {
      ID_history: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      NIM: {
        type: DataTypes.STRING(11),
        allowNull: false,
      },
      ID_peminjaman: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ID_suratdisposisi: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ID_Disposisi: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {});
  
    History.associate = (models) => {
      History.belongsTo(models.Mahasiswa, { foreignKey: 'NIM' });
      History.belongsTo(models.PeminjamanGedung, { foreignKey: 'ID_peminjaman' });
      History.belongsTo(models.SuratDisposisi, { foreignKey: 'ID_suratdisposisi' });
      History.belongsTo(models.Disposisi, { foreignKey: 'ID_Disposisi' });
    };
  
    return History;
  };
  