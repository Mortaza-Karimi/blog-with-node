const fs = require("fs");
const showCategories = (req, res) => {
  try {
    const categories = JSON.parse(
      fs.readFileSync("./app/categories/categories.json", "utf-8")
    );
  } catch (e) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("Error 404 : not found");
    return;
  }

  res.json(categories);
};
module.exports = showCategories;
