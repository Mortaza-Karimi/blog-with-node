const fs = require("fs");
function showByMonth(req, res) {
  const months = { months: [] };

  const dirFileList = fs.readdirSync("articles");

  dirFileList.map(function (value, index) {
    const thisArticle = fs.readFileSync(`articles/${value}/data.json`, "utf-8");

    if (JSON.parse(thisArticle)["date"]["year"] === req.params.year) {
      if (JSON.parse(thisArticle)["date"]["month"] === req.params.month) {
        months.months.push(JSON.parse(thisArticle));
      }
    }
  });

  res.json(months);
}
module.exports = showByMonth;
