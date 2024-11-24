const express = require("express");
const RefreshController = require("../Controllers/refresh_controller");

const router = express.Router();

router.get("/refresh", RefreshController);

module.exports = router;
