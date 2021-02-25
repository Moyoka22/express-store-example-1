const express = require("express");

const items = require("./items");
const templating = include("utils/templating");

const store = express.Router();

const storeLandingPageMiddleware = (req, res, next) => {
  res.sendFile(templating.resolveTemplate("store"));
};

store.get("/", storeLandingPageMiddleware);
store.use("/items", items);

module.exports = store;
