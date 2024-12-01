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
}

module.exports = ProductService;
