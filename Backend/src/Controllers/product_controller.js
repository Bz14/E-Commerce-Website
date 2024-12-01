const ProductRepository = require("../Infrastructure/product_repository");
const ProductService = require("../Services/product_service");

const productRepo = new ProductRepository();
const productService = new ProductService(productRepo);

const ProductDetailController = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.GetProductDetails(productId);
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

module.exports = { ProductDetailController };
