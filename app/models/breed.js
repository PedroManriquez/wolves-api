'use strict';
module.exports = (sequelize, DataTypes) => {
  const breed = sequelize.define('breed', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  breed.associate = (models) => {
    breed.hasMany(models.wolf, {
      foreignKey: 'breedId',
      as: 'wolves'
    });
  };
  return breed;
};
