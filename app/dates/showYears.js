const fs = require("fs");
function showYears(req, res) {
  const years = { years: [] };

  const dirFileList = fs.readdirSync("articles");

  dirFileList.map(function (value, index) {
    const thisArticle = fs.readFileSync(`articles/${value}/data.json`, "utf-8");
    years.years.push(JSON.parse(thisArticle)["date"]["year"]);
  });

  res.json(years);
}
module.exports = showYears;
