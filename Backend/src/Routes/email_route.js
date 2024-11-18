const express = require("express");
const router = express.Router();
const { Email } = require("../Controllers/email_controller");

router.get("/email", Email);

module.exports = router;
