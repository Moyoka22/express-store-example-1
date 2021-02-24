const resolveView = include("utils/view/resolveView");

const store = (_, res, _2) => {
  res.sendFile(resolveView("admin", "manage", "store"));
};

module.exports = store;
