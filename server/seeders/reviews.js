const sequelize = require("../config/connection");
const Review = require("../models/Review");
const reviewSeedData = require("./reviewSeedData.json");

const seedDatabase = () => {
  return sequelize.sync({ force: true }).then(() => {
    Review.bulkCreate(reviewSeedData).then(() => {
      console.log("All Seeds Planted");
    });
  });
};

seedDatabase();
