const fs = require("fs");
const showByCategories = (req, res) => {
  const categories = { categories: [] };

  try {
    const dirFileList = fs.readdirSync("articles");
    dirFileList.map(function (value, index) {
      try {
        const thisArticle = fs.readFileSync(
          `articles/${value}/data.json`,
          "utf-8"
        );
        if (
          req.params.category ===
          JSON.parse(thisArticle)["category"].replaceAll(" ", "-")
        ) {
          categories.categories.push(JSON.parse(thisArticle));
        }
      } catch (e) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("Error 404 : not found");
        return;
      }
    });
  } catch (e) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("Error 404 : not found");
  }

  res.json(categories);
};
module.exports = showByCategories;
