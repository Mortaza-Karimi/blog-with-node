const fs = require("fs");
const addArticle = (req, res) => {
  console.log(req.body["name"]);
  console.log(req.body.name);
  if (
    req.body.name &&
    req.body.category &&
    req.body.tags &&
    req.body.year &&
    req.body.month &&
    req.body.content
  ) {
    fs.mkdirSync(`./articles/${req.body.name}`);
    fs.writeFileSync(
      `./articles/${req.body.name}/${req.body.name}.md`,
      req.body.content
    );
    const jsonData = {
      name: req.body.name,
      category: req.body.category,
      tags: req.body.tags,
      date: {
        year: req.body.year,
        month: req.body.month,
      },
    };
    console.log(jsonData);
    fs.writeFileSync(
      `./articles/${req.body.name}/data.json`,
      JSON.stringify(jsonData)
    );

    res.json({ status: "ok" });
    return;
  }
  res.json({ status: "fail" });
};
module.exports = addArticle;
