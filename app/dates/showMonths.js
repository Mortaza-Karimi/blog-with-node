const fs = require("fs");
const showMonths = (req, res) => {
  const months = { months: [] };

  try {
    const dirFileList = fs.readdirSync("articles");
    dirFileList.map(function (value, index) {
      try {
        const thisArticle = fs.readFileSync(
          `articles/${value}/data.json`,
          "utf-8"
        );
        months.months.push(
          JSON.parse(thisArticle)["date"]["year"] +
            " / " +
            JSON.parse(thisArticle)["date"]["month"]
        );
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

  res.json(months);
};
module.exports = showMonths;
