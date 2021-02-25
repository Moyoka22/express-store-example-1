const express = require("express");

const manage = require("./manage");
const resolveView = include("utils/view/resolveView");

const admin = express.Router();

const adminLandingPageMiddleware = (req, res, next) => {
  res.sendFile(resolveView("admin"));
};

admin.get("/", adminLandingPageMiddleware);
admin.use("/manage", manage);

module.exports = admin;
