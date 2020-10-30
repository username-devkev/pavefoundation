const express = require("express");
const serverless = require("serverless-http");

const app = express();

const router = express.Router();

router.get("/api", (req, res) => {
  res.json("success");
});

app.use("./netlify/functions", router);

module.exports.handler = serverless(app);
