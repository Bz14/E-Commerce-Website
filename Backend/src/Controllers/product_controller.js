const ProductRepository = require("../Infrastructure/product_repository");
const ProductService = require("../Services/product_service");

const productRepo = new ProductRepository();
const productService = new ProductService(productRepo);

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
    const {
      name,
      price,
      description,
      category,
      image,
      size,
      oldPrice,
      discount,
      reviews,
      rating,
      tags,
      gallery,
      colors,
      quantity,
    } = req.body;

    try {
      await productService.CreateProduct(
        name,
        price,
        description,
        category,
        image,
        size,
        oldPrice,
        discount,
        reviews,
        rating,
        tags,
        gallery,
        colors,
        quantity
      );
      res.status(201).json({ message: "Product created successfully" });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    }
  };
}

module.exports = ProductController;
