const express = require("express");
const serverless = require("serverless-http");

const app = express();

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hi: "hello",
  });
});

app.use("./netlify/functions", router);

module.exports.handler = serverless(app);
