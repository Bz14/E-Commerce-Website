const ProductModel = require("../Models/product_model");
const Product = require("../Domains/Entities/Product");

class ProductRepository {
  constructor() {}

  async GetProductById(productId) {
    try {
      const product = await ProductModel.findOne({ _id: productId });
      return product;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductRepository;
