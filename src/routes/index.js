const express = require("express");

const resolveView = include("utils/view/resolveView");

const index = express.Router();

index.get("/", (_, res, _2) => {
  res.sendFile(resolveView());
});

module.exports = index;
