const express = require("express");
const passport = require("passport");

const AuthController = require("../Controllers/auth_controller");
authController = new AuthController();

const router = express.Router();

router.post("/signup", authController.SignupController);
router.get("/verify", authController.VerifyController);
router.post("/login", authController.LoginController);
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  authController.GoogleAuthCallback
);

module.exports = router;
