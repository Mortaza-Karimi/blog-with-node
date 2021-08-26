const fs = require("fs");
const showArticle = (req, res) => {
  const article = { article: null };
  const dirFileList = fs.readdirSync("./articles");
  dirFileList.map(function (value, index) {
    const thisArticle = fs.readFileSync(
      `./articles/${dirFileList[index]}/data.json`,
      "utf-8"
    );
    if (value.replace(" ", "-") === req.params.article) {
      article.article = JSON.parse(thisArticle);
    }
    res.json(article);
  });
};
module.exports = showArticle;
