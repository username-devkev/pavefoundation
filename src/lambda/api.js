const express = require("express");
const serverless = require("serverless-http");

const app = express();

const router = express.Router();

router.get("/", (req, res) => {
  res.write(<h1>hello</h1>);
});

app.use("./netlify/functions", router);

module.exports.handler = serverless(app);
