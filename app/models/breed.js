'use strict';
module.exports = (sequelize, DataTypes) => {
  const breed = sequelize.define('breed', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  breed.associate = (models) => {
    // associations can be defined here
  };
  return breed;
};
