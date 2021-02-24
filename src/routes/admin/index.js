const express = require("express");

const manage = require("./manage");

const admin = express.Router();

const adminLandingPageMiddleware = (req, res, next) => {};

admin.get("/", adminLandingPageMiddleware);
admin.use("/manage", manage);

module.exports = admin;
