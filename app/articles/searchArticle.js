const fs = require("fs");
const searchArticle = (req, res) => {
  console.log(req.query);
  const article = { articles: [] };
  const dirFileList = fs.readdirSync("./articles");
  dirFileList.map(function (value, index) {
    const thisArticle = fs.readFileSync(
      `./articles/${dirFileList[index]}/data.json`,
      "utf-8"
    );
    if (value.includes(req.query.q)) {
      article.articles = JSON.parse(thisArticle);
    }
  });
  res.json(article);
};
module.exports = searchArticle;
