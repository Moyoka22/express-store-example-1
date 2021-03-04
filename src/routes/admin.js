const express = require("express");

const adminLandingPageHandler = include("handlers/admin");

const admin = express.Router();

admin.get("/", adminLandingPageHandler);

module.exports = admin;
