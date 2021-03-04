const express = require("express");

const storeLandingPageHandler = include("handlers/store");

const store = express.Router();

store.get("/", storeLandingPageHandler);

module.exports = store;
