const { json } = require("body-parser");
const fs = require("fs");
const addCategory = (req, res) => {
  if (!req.body.category) {
    res.json({ status: "fail" });
    return;
  }

  try {
    var categories = JSON.parse(
      fs.readFileSync(`./app/server/categories/categories.json`, "utf-8")
    );
  } catch (e) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("Error 404 : not found");
    return;
  }

  categories.categories.push(req.body.category);
  try {
    fs.writeFileSync(
      `./app/server/categories/categories.json`,
      JSON.stringify(categories)
    );
  } catch (e) {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end("Error 500 : Internal Server Error");
    return;
  }

  res.json({ status: "ok" });
};
module.exports = addCategory;
