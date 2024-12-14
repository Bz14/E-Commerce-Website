const ProductRepository = require("../Infrastructure/product_repository");
const ProductService = require("../Services/product_service");

const productRepo = new ProductRepository();
const productService = new ProductService(productRepo);
const Product = require("../Domains/Entities/Product");
class ProductController {
  FetchProductDetail = async (req, res) => {
    const productId = req.params.id;
    try {
      const product = await productService.GetProductDetails(productId);
      res.status(200).json(product);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    }
  };

  FetchFeaturedProducts = async (req, res) => {
    try {
      const products = await productService.GetFeaturedProducts();
      res.status(200).json(products);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    }
  };

  FetchProducts = async (req, res) => {
    const { category, page, limit } = req.query;

    try {
      const { products, pagination } = await productService.GetProducts(
        category,
        page,
        limit
      );
      res.status(200).json({ products, pagination });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    }
  };

  CreateProduct = async (req, res) => {
    console.log(req.body);
    try {
      const user = new Product(req.body);
      await productService.CreateProduct(user);
      res.status(201).json({ message: "Product created successfully" });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    }
  };
}

module.exports = ProductController;
