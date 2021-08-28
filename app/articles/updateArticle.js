const fs = require("fs");
const updateArticle = (req, res) => {
  console.log(req.body["name"]);
  console.log(req.body.name);

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
  fs.writeFileSync(
    `./articles/${req.body.name}/data.json`,
    JSON.stringify(jsonData)
  );

  res.json({ status: "ok" });
  return;
};
module.exports = updateArticle;
