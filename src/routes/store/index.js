const express = require("express");

const items = require("./items");

const store = express.Router();

const storeLandingPageMiddleware = (req, res, next) => {};

store.get("/", storeLandingPageMiddleware);
store.use("/items", items);

module.exports = store;
