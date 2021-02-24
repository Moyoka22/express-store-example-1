const express = require("express");

const adminRoutes = require("./routes/admin");
const defaultRoute = require("./routes/default");
const storeRoutes = require("./routes/store");

const app = express();

app.use("/", (req, res, next) => {
  next();
  console.log(`${req.url} - ${req.method.toUpperCase()} - ${res.statusCode}`);
});
app.use("/admin", adminRoutes);
app.use("/store", storeRoutes);

app.use(defaultRoute);

module.exports = app;
