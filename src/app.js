const path = require("path");

const express = require("express");

const adminRoutes = require("./routes/admin");
const indexRoute = require("./routes");
const defaultRoute = require("./routes/default");
const storeRoutes = require("./routes/store");

const app = express();

app.use("/", (req, res, next) => {
  next();
  console.log(`${req.url} - ${req.method.toUpperCase()} - ${res.statusCode}`);
});
app.use(express.static(path.join(process.env.ROOT_DIR, "public")));

app.use("/admin", adminRoutes);
app.use("/store", storeRoutes);
app.use("/", indexRoute);

app.use(defaultRoute);

module.exports = app;
