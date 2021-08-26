const fs = require("fs");
const showByYear = (req, res) => {
  const years = { years: [] };

  const dirFileList = fs.readdirSync("articles");

  dirFileList.map(function (value, index) {
    const thisArticle = fs.readFileSync(`articles/${value}/data.json`, "utf-8");
    if (JSON.parse(thisArticle)["date"]["year"] === req.params.year) {
      years.years.push(JSON.parse(thisArticle));
    }
  });

  res.json(years);
};
module.exports = showByYear;
