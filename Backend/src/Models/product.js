const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  oldPrice: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  reviews: {
    type: Number,
    required: true,
  },
  size: {
    type: Array,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  colors: {
    type: Array,
    required: true,
  },
  gallery: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
