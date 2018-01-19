'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('breeds', [{
      name: 'Ethiopian Wolf',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Arctic Wolf',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Gray Wolf',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Red Wolf',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('breeds', null, {});
  }
};
