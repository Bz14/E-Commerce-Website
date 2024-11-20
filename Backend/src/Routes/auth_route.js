const express = require("express");

const {
  SignupController,
  VerifyController,
  LoginController,
} = require("../Controllers/auth_controller");

const router = express.Router();

router.post("/signup", SignupController);
router.get("/verify", VerifyController);
router.post("/login", LoginController);

module.exports = router;
