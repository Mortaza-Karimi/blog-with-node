const fs = require("fs");
function showByCategories(req, res) {
  const categories = { categories: [] };

  const dirFileList = fs.readdirSync("articles");

  dirFileList.map(function (value, index) {
    const thisArticle = fs.readFileSync(`articles/${value}/data.json`, "utf-8");

    if (
      req.params.category ===
      JSON.parse(thisArticle)["category"].replaceAll(" ", "-")
    ) {
      categories.categories.push(JSON.parse(thisArticle));
    }
  });

  res.json(categories);
}
module.exports = showByCategories;
