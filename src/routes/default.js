const resolveView = include("utils/view/resolveView");

const defaultMiddleware = (_, res, _2) => {
  res.status(404).sendFile(resolveView("error", "404"));
};
module.exports = defaultMiddleware;
