const express = require("express");

const { Signup } = require("../Controllers/auth_controller");

const router = express.Router();

router.get("/signup", Signup);

module.exports = router;
