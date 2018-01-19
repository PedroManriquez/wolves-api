'use strict';
module.exports = (sequelize, DataTypes) => {
  const wolf = sequelize.define('wolf', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    breedId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  wolf.associate = (models) => {
    wolf.belongsTo(models.breed, {
      foreignKey: 'breedId',
      onDelete: 'CASCADE'
    });
  };
  return wolf;
};