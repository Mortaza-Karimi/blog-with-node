const fs = require("fs");
const searchArticle = require("./searchArticle");
const showArticles = (req, res) => {
  if (req.query.q) {
    searchArticle(req, res);
    return;
  }
  const articles = { articles: [] };

  try {
    const dirFileList = fs.readdirSync("articles");

    dirFileList.map(function (value, index) {
      try {
        const thisArticle = fs.readFileSync(
          `articles/${value}/data.json`,
          "utf-8"
        );
        articles.articles.push(JSON.parse(thisArticle));
      } catch (e) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("Error 404 : not found");
        return;
      }
    });
  } catch (e) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("Error 404 : not found");
    return;
  }

  // articles.articles = dirFileList;

  res.json(articles);
};
module.exports = showArticles;
