const ProductModel = require("../Models/product");

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

  async GetFeaturedProducts() {
    try {
      const products = await ProductModel.find({ featured: true }).limit(3);
      return products;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductRepository;
