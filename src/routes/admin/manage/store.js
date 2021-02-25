const express = require("express");

const templating = include("utils/templating");

const storeLandingPageMiddleware = (_, res, _2) => {
  res.sendFile(templating.resolveTemplate("admin", "manage", "store"));
};

const store = express.Router();

store.get("/", storeLandingPageMiddleware);
store.post("/create-item", (req, res, next) => {
  console.log(req.body);
  res.redirect(301, "/admin/manage/store");
});

module.exports = store;
