const fs = require("fs");
const searchArticle = (req, res) => {
  const article = { articles: [] };
  try {
    const dirFileList = fs.readdirSync("./articles");
    dirFileList.map(function (value, index) {
      try {
        const thisArticle = fs.readFileSync(
          `./articles/${dirFileList[index]}/data.json`,
          "utf-8"
        );
      } catch (e) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("Error 404 : not found");
        return;
      }
      if (value.includes(req.query.q)) {
        article.articles = JSON.parse(thisArticle);
      }
    });
  } catch (e) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("Error 404 : not found");
    return;
  }
  res.json(article);
};
module.exports = searchArticle;
