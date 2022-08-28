const mongoose = require("mongoose");

const { Schema } = mongoose;

const gallerySchema = new Schema({
  image_name: {
    type: String,
    required: true,
    trim: true,
  }
});

const Gallery = mongoose.model("Gallery", gallerySchema);

module.exports = Gallery;
