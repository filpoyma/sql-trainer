"use strict";
const fs = require("fs").promises;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const seedData = async (path, queryInterface) => {
  const data = await fs.readFile(path, "utf8");
  try {
    const dataArr = JSON.parse(data);
    let j=0;
    for (const item of dataArr) {
      await sleep(50);
      const res = await queryInterface.sequelize.query(item);
      console.log(++j, item);
    }
  } catch (e) {
    console.log("Error Promice", e.message);
  }
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await seedData("./dbsqlite3/seeders/tableInit.json", queryInterface);
    await seedData("./dbsqlite3/seeders/seeds.json", queryInterface)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
