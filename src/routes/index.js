const express = require("express");

const adminRoutes = require("./admin");
const storeRoutes = require("./store");
const defaultHandler = include("handlers/default");
const landingPageHandler = include("handlers/landing");

const index = express.Router();

index.get("/", landingPageHandler);
index.use("/admin", adminRoutes);
index.use("/store", storeRoutes);

index.use(defaultHandler);

module.exports = index;
