const express = require("express");
const router = express.Router();
const { EmailController } = require("../Controllers/email_controller");

router.get("/email", EmailController);

module.exports = router;
