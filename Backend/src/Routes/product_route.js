const express = require("express");
const {
  ProductDetailController,
  ProductFeaturedController,
} = require("../Controllers/product_controller");

const router = express.Router();

router.get("/product/:id", ProductDetailController);
router.get("/products/featured", ProductFeaturedController);

module.exports = router;
