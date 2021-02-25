const fs = require("fs");
const path = require("path");

const templateDirectory = path.join(process.env.ROOT_DIR, "src", "templates");

const resolveTemplate = (...relPathComponents) => {
  let p = path.join(templateDirectory, ...relPathComponents);
  try {
    if (fs.lstatSync(p).isDirectory()) {
      p = path.join(p, "index");
    } else {
    }
  } catch (e) {}
  p += ".html";
  return p;
};

module.exports = resolveTemplate;
