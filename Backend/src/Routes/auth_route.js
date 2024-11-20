const express = require("express");

const {
  SignupController,
  VerifyController,
} = require("../Controllers/auth_controller");

const router = express.Router();

router.post("/signup", SignupController);
router.get("/verify", VerifyController);

module.exports = router;
