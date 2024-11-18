const express = require("express");

const { SignupController } = require("../Controllers/auth_controller");

const router = express.Router();

router.post("/signup", SignupController);

module.exports = router;
