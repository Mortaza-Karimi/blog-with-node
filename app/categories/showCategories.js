const fs = require("fs");
const showCategories = (req, res) => {
  const categories = JSON.parse(
    fs.readFileSync("./app/categories/categories.json", "utf-8")
  );

  res.json(categories);
};
module.exports = showCategories;
