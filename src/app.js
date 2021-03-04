const path = require("path");

const express = require("express");

const routes = require("./routes");
const { logIncomingRequestMiddleware } = require("./utils/middlewares");

const app = express();
app.set("rootDir", process.env.ROOT_DIR);
app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.static(path.join(process.env.ROOT_DIR, "public")));

app.use("/", logIncomingRequestMiddleware);

app.use("/", routes);

module.exports = app;
