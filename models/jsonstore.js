'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JsonStore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JsonStore.init({
    key: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    data: {
      type: DataTypes.JSONB,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'JsonStore',
  });
  return JsonStore;
};