const fs = require("fs");
function showCategories(req, res) {
  const categories = { categories: [] };

  const dirFileList = fs.readdirSync("articles");

  dirFileList.map(function (value, index) {
    const thisArticle = fs.readFileSync(`articles/${value}/data.json`, "utf-8");
    categories.categories.push(JSON.parse(thisArticle)["category"]);
  });

  res.json(categories);
}
module.exports = showCategories;
