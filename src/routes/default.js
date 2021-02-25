const templating = include("utils/templating");

const defaultMiddleware = (_, res, _2) => {
  res.sendFile(templating.resolveTemplate("error", "404"));
  res.statusCode = 404;
};
module.exports = defaultMiddleware;
