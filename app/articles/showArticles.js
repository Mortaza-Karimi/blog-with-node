const fs = require("fs");
const searchArticle = require("./searchArticle");
const showArticles = (req, res) => {
  if (req.query.q) {
    searchArticle(req, res);
    return;
  }
  const articles = { articles: [] };

  const dirFileList = fs.readdirSync("articles");

  dirFileList.map(function (value, index) {
    const thisArticle = fs.readFileSync(`articles/${value}/data.json`, "utf-8");
    articles.articles.push(JSON.parse(thisArticle));
  });

  // articles.articles = dirFileList;

  res.json(articles);
};
module.exports = showArticles;
