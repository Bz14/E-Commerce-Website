const ProductModel = require("../Models/product");
const Pagination = require("../Domains/Entities/Pagination");
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

  async GetFeaturedProducts() {
    try {
      const products = await ProductModel.find({ featured: true }).limit(3);
      return products;
    } catch (error) {
      throw error;
    }
  }

  async GetProducts(category, page, limit) {
    const paginationEntity = new Pagination(page, limit);
    const { offset } = paginationEntity.GetPagination();
    try {
      const products = await ProductModel.find({ category: category })
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(limit);

      const totalProducts = await ProductModel.find({
        category: category,
      }).countDocuments();
      const totalPages = Math.ceil(totalProducts / limit);

      const pagination = {
        currentPage: page,
        totalPages: totalPages,
        total: totalProducts,
      };

      return { products, pagination };
    } catch (error) {
      throw error;
    }
  }

  async CreateProduct(product) {
    try {
      const newProduct = new ProductModel(product);
      await newProduct.save();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductRepository;
