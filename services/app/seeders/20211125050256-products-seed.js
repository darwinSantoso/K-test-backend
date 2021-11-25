'use strict';
const fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const data = fs.readFileSync('products.json', 'utf-8');
    let productsData = JSON.parse(data, 'utf-8');

    productsData.forEach((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    });

    await queryInterface.bulkInsert('Products', productsData);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {});
  },
};
