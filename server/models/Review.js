const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create a new Sequelize model for the Reviews
class Reviews extends Model {}

Reviews.init(
  // Define fields/columns on model
  {
    review_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    review_text: {
      type: DataTypes.STRING,
    },
    review_date: {
      type: DataTypes.DATE,
    },
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    // Prevent sequelize from renaming the table
    freezeTableName: true,
    underscored: true,
    modelName: "reviews",
  }
);

module.exports = Reviews;
