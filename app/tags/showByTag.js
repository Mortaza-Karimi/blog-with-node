const fs = require("fs");
function showByTag(req, res) {
  const tags = { tags: [] };

  const dirFileList = fs.readdirSync("articles");

  dirFileList.map(function (value, index) {
    const thisArticle = fs.readFileSync(`articles/${value}/data.json`, "utf-8");
    if (JSON.parse(thisArticle)["tags"].includes(req.params.tag)) {
      tags.tags.push(JSON.parse(thisArticle));
    }
  });

  res.json(tags);
}
module.exports = showByTag;
