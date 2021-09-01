const fs = require("fs");
const showByTag = (req, res) => {
  const tags = { tags: [] };

  try {
    const dirFileList = fs.readdirSync("articles");
  } catch (e) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("Error 404 : not found");
    return;
  }

  dirFileList.map(function (value, index) {
    try {
      const thisArticle = fs.readFileSync(
        `articles/${value}/data.json`,
        "utf-8"
      );
    } catch (e) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("Error 404 : not found");
      return;
    }
    if (JSON.parse(thisArticle)["tags"].includes(req.params.tag)) {
      tags.tags.push(JSON.parse(thisArticle));
    }
  });

  res.json(tags);
};
module.exports = showByTag;
