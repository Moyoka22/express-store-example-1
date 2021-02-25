const express = require("express");

const items = require("./items");
const resolveView = include("utils/view/resolveView");

const store = express.Router();

const storeLandingPageMiddleware = (req, res, next) => {
  res.sendFile(resolveView("store"));
};

store.get("/", storeLandingPageMiddleware);
store.use("/items", items);

module.exports = store;
