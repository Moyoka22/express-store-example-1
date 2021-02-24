const fs = require("fs");
const path = require("path");

const viewsDirectory = path.join(process.env.ROOT_DIR, "src", "views");

const resolveView = (...relPathComponents) => {
  let p = path.join(viewsDirectory, ...relPathComponents);
  try {
    if (fs.lstatSync(p).isDirectory()) {
      p = path.join(p, "index");
    } else {
    }
  } catch (e) {}
  p += ".html";
  return p;
};

module.exports = resolveView;
