'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Elements extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Elements.init({
    parentId: DataTypes.INTEGER,
    attributes: DataTypes.JSONB,
    innerText: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Elements',
  });
  return Elements;
};