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
        if (value.replace(" ", "-") === req.params.article) {
          article.article = JSON.parse(thisArticle);
        }
      } catch (e) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("Error 404 : not found");
        return;
      }
      res.json(article);
    });
  } catch (e) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("Error 404 : not found");
    return;
  }
};
module.exports = showArticle;
