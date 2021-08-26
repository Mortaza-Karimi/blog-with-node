const fs = require("fs");
const showMonths = (req, res) => {
  const months = { months: [] };

  const dirFileList = fs.readdirSync("articles");

  dirFileList.map(function (value, index) {
    const thisArticle = fs.readFileSync(`articles/${value}/data.json`, "utf-8");

    months.months.push(
      JSON.parse(thisArticle)["date"]["year"] +
        " / " +
        JSON.parse(thisArticle)["date"]["month"]
    );
  });

  res.json(months);
};
module.exports = showMonths;
