class ProductService {
  constructor(productRepo) {
    this.productRepo = productRepo;
  }

  async GetProductDetails(productId) {
    try {
      const product = await this.productRepo.GetProductById(productId);
      return product;
    } catch (error) {
      throw error;
    }
  }

  async GetFeaturedProducts() {
    try {
      const products = await this.productRepo.GetFeaturedProducts();
      return products;
    } catch (error) {
      throw error;
    }
  }

  async GetProducts(category, page, limit) {
    try {
      const { products, pagination } = await this.productRepo.GetProducts(
        category,
        page,
        limit
      );
      return { products, pagination };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductService;
