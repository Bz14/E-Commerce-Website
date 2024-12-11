const express = require("express");
const ProductController = require("../Controllers/product_controller");

const productController = new ProductController();

const router = express.Router();

router.get("/product/:id", productController.FetchProductDetail);
router.get("/products/featured", productController.FetchFeaturedProducts);
router.get("/products", productController.FetchProducts);

module.exports = router;
