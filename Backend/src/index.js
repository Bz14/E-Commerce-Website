const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();
const connectToDb = require("./Config/db");
const authRoute = require("./Routes/auth_route");
require("dotenv").config();

const port = process.env.API_PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(router);

connectToDb();

router.use("/api/v1/auth", authRoute);

app.get("/api/v1", (req, res) => {
  res.status(200).send("E-Commerce server");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
