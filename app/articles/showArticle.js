const fs = require("fs");
const showArticle = (req, res) => {
  const article = { article: null };
  try {
    const dirFileList = fs.readdirSync("./articles");
    dirFileList.map(function (value, index) {
      try {
        const thisArticle = fs.readFileSync(
          `./articles/${dirFileList[index]}/data.json`,
          "utf-8"
        );

        if (
          decodeURI(value).trim().replace(" ", "-") ===
          req.params.article.trim().replace(" ", "-")
        ) {
          article.article = JSON.parse(thisArticle);
        }
        if (
          decodeURI(value).trim().replace("%20", "-") ===
          req.params.article.trim().replace("%20", "-")
        ) {
          article.article = JSON.parse(thisArticle);
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
    return;
  }
  res.json(article);
};
module.exports = showArticle;
