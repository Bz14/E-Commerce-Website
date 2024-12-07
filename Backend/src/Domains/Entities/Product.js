const Discount = require("../Value-objects/discount");
const Name = require("../Value-objects/name");
const Price = require("../Value-objects/price");
const Quantity = require("../Value-objects/quantity");
const Size = require("../Value-objects/size");

class Product {
  constructor(
    id,
    name,
    price,
    description,
    oldPrice,
    discount,
    rating,
    quantity,
    reviews,
    size,
    tags,
    colors,
    gallery,
    featured
  ) {
    this.id = id;
    this.name = new Name(name);
    this.price = new Price(price);
    this.description = description;
    this.oldPrice = new Price(oldPrice);
    this.discount = new Discount(discount, price);
    this.rating = new Rating(rating);
    this.quantity = new Quantity(quantity);
    this.reviews = new Reviews(reviews);
    this.size = new Size(size);
    this.tags = tags;
    this.colors = colors;
    this.gallery = gallery;
    this.featured = featured;
  }
}

module.exports = Product;
