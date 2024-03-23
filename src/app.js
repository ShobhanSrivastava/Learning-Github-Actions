const express = require("express");

const app = express();

app.get("/health-check", (req, res) => {
  return res.status(200).json({ message: "api working" });
});

app.get("/add", (req, res) => {
  const { a, b } = req.query;
  try {
    const result = parseInt(a) + parseInt(b);
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(400).json({ message: "Invalid query parameters" });
  }
});

module.exports = app;
