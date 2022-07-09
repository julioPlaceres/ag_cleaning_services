const mongoose = require("mongoose");

const { Schema } = mongoose;

const reviewSchema = new Schema({
  review_name: {
    type: String,
    required: true,
    trim: true,
  },
  review_text: {
    type: String,
    required: true,
    trim: true,
  },
  review_date: {
    type: Date,
    default: Date.now,
  },
});

const Reviews = mongoose.model("Reviews", reviewSchema);

module.exports = Reviews;
