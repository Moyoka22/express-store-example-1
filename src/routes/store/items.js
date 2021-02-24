const express = require("express");

const items = express.Router();

items.get("/", (req, res, next) => {
  res.send("<h1>Items</h1>");
});

module.exports = items;
