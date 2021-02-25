const express = require("express");

const manage = require("./manage");
const templating = include("utils/templating");

const admin = express.Router();

const adminLandingPageMiddleware = (req, res, next) => {
  res.sendFile(templating.resolveTemplate("admin"));
};

admin.get("/", adminLandingPageMiddleware);
admin.use("/manage", manage);

module.exports = admin;
