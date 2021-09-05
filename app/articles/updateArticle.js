const fs = require("fs");
const updateArticle = (req, res) => {
  try {
    const article = JSON.parse(
      fs.readFileSync(`./articles/${req.body.name}/data.json`)
    );
    const jsonData = {
      name: req.body.name == "" ? article.name : req.body.name,
      category: req.body.category == "" ? article.category : req.body.category,
      tags: req.body.tags == "" ? article.tags : req.body.tags,
      date: {
        year: req.body.year == "" ? article.date.year : req.body.year,
        month: req.body.month == "" ? article.date.month : req.body.month,
      },
    };

    try {
      fs.writeFileSync(
        `./articles/${req.body.name}/data.json`,
        JSON.stringify(jsonData)
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
