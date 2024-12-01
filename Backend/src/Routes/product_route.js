const express = require("express");
const {
  ProductDetailController,
} = require("../Controllers/product_controller");

const router = express.Router();

router.get("/product/:id", ProductDetailController);

module.exports = router;
