const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const router = express.Router();
const connectToDb = require("./Config/db");
const authRoute = require("./Routes/auth_route");
const emailRoute = require("./Routes/email_route");
const refreshRoute = require("./Routes/refresh_route");
const productRoute = require("./Routes/product_route");
const passport = require("./Services/oauth_service");
const path = require("path");
require("dotenv").config();

const port = process.env.API_PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(router);
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "public")));

connectToDb();

router.use("/api/v1/auth", authRoute);
router.use("/api/v1", emailRoute);
router.use("/api/v1", refreshRoute);
router.use("/api/v1", productRoute);

app.get("/api/v1", (req, res) => {
  res.status(200).send("E-Commerce server");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
