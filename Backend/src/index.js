const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("E-Commerce server");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
