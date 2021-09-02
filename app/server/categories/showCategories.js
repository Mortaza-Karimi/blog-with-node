const fs = require("fs");
const showCategories = (req, res) => {
  try {
    const categories = JSON.parse(
      fs.readFileSync("./app/server/categories/categories.json", "utf-8")
    );
    res.json(categories);
  } catch (e) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("Error 404 : not found");
    return;
  }
};
module.exports = showCategories;
