const path = require("path");
process.env.ROOT_DIR = path.resolve(path.join(__dirname, ".."));

require("dotenv").config({ path: path.join(process.env.ROOT_DIR, ".env") });

global.include = function (relPath) {
  return require(path.join(__dirname, relPath));
};
