const fs = require("fs");
const rimraf = require("rimraf");
const updateArticle = (req, res) => {
  try {
    const jsonData = {
      name: req.body.name,
      category: req.body.category,
      tags: req.body.tags,
      content: req.body.content,
      date: {
        year: req.body.year,
        month: req.body.month,
      },
    };

    try {
      rimraf(`./articles/${req.body.OLDname}`, (e) => {
        console.log(e);
      });
      fs.mkdirSync(`./articles/${req.body.name}`);

      fs.writeFileSync(
        `./articles/${req.body.name}/data.json`,
        JSON.stringify(jsonData)
      );
      fs.writeFileSync(
        `./articles/${req.body.name}/${req.body.name}.md`,
        req.body.content
      );
    } catch (e) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("Error 500 : Internal Server Error");
      return;
    }

    res.json({ status: "ok" });
    return;
  } catch (e) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("Error 404 : not found");
    return;
  }
};
module.exports = updateArticle;
