'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dispo_clase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  dispo_clase.init({
    id_clase: DataTypes.INTEGER,
    dia_sem: DataTypes.STRING,
    fecha: DataTypes.DATE,
    hora_ini: DataTypes.TIME,
    hora_fin: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'dispo_clase',
  });
  return dispo_clase;
};