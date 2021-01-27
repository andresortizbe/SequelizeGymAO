'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cliente_clase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  cliente_clase.init({
    id_cliente: DataTypes.INTEGER,
    id_dispo_clase: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cliente_clase',
  });
  return cliente_clase;
};