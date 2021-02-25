const express = require("express");

const templating = include("utils/templating");

const index = express.Router();

index.get("/", (_, res, _2) => {
  res.sendFile(templating.resolveTemplate());
});

module.exports = index;
