const fs = require("fs");
const searchArticle = (req, res) => {
  const article = { searched: [] };
  try {
    dirFileList = fs.readdirSync("./articles");
    dirFileList.map(function (value, index) {
      try {
        thisArticle = fs.readFileSync(
          `./articles/${dirFileList[index]}/data.json`,
          "utf-8"
        );
        if (value.includes(req.query.q)) {
          article.searched.push(JSON.parse(thisArticle));
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
module.exports = searchArticle;
