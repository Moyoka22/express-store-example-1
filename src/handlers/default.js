module.exports = (req, res, next) => {
  res.render("404", { pageTitle: "Not Found" });
  res.statusCode = 404;
};
