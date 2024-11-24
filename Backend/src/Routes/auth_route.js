const express = require("express");
const passport = require("passport");

const {
  SignupController,
  VerifyController,
  LoginController,
  GoogleAuthCallback,
} = require("../Controllers/auth_controller");

const router = express.Router();

router.post("/signup", SignupController);
router.get("/verify", VerifyController);
router.post("/login", LoginController);
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  GoogleAuthCallback
);

module.exports = router;
