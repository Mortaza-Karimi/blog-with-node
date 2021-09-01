const fs = require("fs");
const showByCategories = (req, res) => {
  const categories = { categories: [] };

  try {
    const dirFileList = fs.readdirSync("articles");
  } catch (e) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("Error 404 : not found");
  }

  dirFileList.map(function (value, index) {
    try {
      const thisArticle = fs.readFileSync(
        `articles/${value}/data.json`,
        "utf-8"
      );
    } catch (e) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("Error 404 : not found");
      return;
    }
    if (
      req.params.category ===
      JSON.parse(thisArticle)["category"].replaceAll(" ", "-")
    ) {
      categories.categories.push(JSON.parse(thisArticle));
    }
  });

  res.json(categories);
};
module.exports = showByCategories;
