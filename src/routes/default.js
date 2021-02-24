const resolveView = include("utils/view/resolveView");

const defaultMiddleware = (_, res, _2) => {
  res.sendFile(resolveView("error", "404"));
};
module.exports = defaultMiddleware;
