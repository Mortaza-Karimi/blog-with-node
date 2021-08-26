const fs = require("fs");
const showArticle = (req, res) => {
  const dirFileList = fs.readdirSync("./articles");
  dirFileList.map(function (value, index) {
    const article = { article: null };
    const thisArticle = fs.readFileSync(
      `./articles/${dirFileList[index]}/data.json`,
      "utf-8"
    );
    if (
      JSON.parse(thisArticle)["name"].replace(" ", "-") === req.params.article
    ) {
      article.article = JSON.parse(thisArticle);
    }
    res.json(article);
  });
};
module.exports = showArticle;
