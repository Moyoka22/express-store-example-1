const express = require("express");

const templating = include("utils/templating");
const store = require("./store");

const manage = express.Router();

const manageLandingPageMiddleware = (_, res, _2) => {
  res.sendFile(templating.resolveTemplate("admin", "manage"));
};

manage.get("/", manageLandingPageMiddleware);
manage.get("/store", store);

module.exports = manage;
