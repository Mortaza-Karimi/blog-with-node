const fs = require("fs");
function showTags(req, res) {
  const tags = { tags: [] };

  const dirFileList = fs.readdirSync("articles");

  dirFileList.map(function (value, index) {
    const thisArticle = fs.readFileSync(`articles/${value}/data.json`, "utf-8");
    JSON.parse(thisArticle)["tags"].map(function (value, index) {
      tags.tags.push(JSON.parse(thisArticle)["tags"][index]);
    });
  });

  res.json(tags);
}
module.exports = showTags;
