const fs = require("fs");
const path = require("path");
const isModuleAvailableSync = function (moduleName) {
  var ret = false;
  var dirSeparator = require("path").sep;

  module.paths.forEach(function (nodeModulesPath) {
    if (fs.existsSync(nodeModulesPath + dirSeparator + moduleName) === true) {
      ret = true;
      return false;
    }
  });

  return ret;
};

function checkArticlesDir() {
  if (fs.statSync("./articles")) {
    return;
  }
  fs.mkdir("./articles", function (err) {
    if (!err) {
      return;
    }

    throw err;
  });
}

function checkModules() {
  if (
    isModuleAvailableSync("express") &&
    isModuleAvailableSync("body-parser")
  ) {
    return true;
  }

  console.log(
    "npm packages not installed ! \n\nto install package run ==> npm i"
  );
  return false;
}

function checkApp() {
  checkArticlesDir();
  const isModulesInstlled = checkModules();
  return isModulesInstlled;
}

module.exports = checkApp;
