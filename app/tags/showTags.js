const fs = require("fs");
const showTags = (req, res) => {
  const tags = { tags: [] };

  try {
    const dirFileList = fs.readdirSync("articles");
    dirFileList.map(function (value, index) {
      try {
        const thisArticle = fs.readFileSync(
          `articles/${value}/data.json`,
          "utf-8"
        );
        JSON.parse(thisArticle)["tags"].map(function (value, index) {
          tags.tags.push(JSON.parse(thisArticle)["tags"][index]);
        });
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

  res.json(tags);
};
module.exports = showTags;
