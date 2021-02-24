const express = require("express");

const resolveView = include("utils/view/resolveView");
const store = require("./store");

const manage = express.Router();

const manageLandingPageMiddleware = (_, res, _2) => {
  res.sendFile(resolveView("admin", "manage"));
};

manage.get("/", manageLandingPageMiddleware);
manage.get("/store", store);

module.exports = manage;
