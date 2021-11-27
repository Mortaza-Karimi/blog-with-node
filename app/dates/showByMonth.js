const fs = require("fs");
const showByMonth = (req, res) => {
  const months = { months: [] };

  try {
    const dirFileList = fs.readdirSync("articles");
    dirFileList.map(function (value, index) {
      try {
        const thisArticle = fs.readFileSync(
          `articles/${value}/data.json`,
          "utf-8"
        );
        console.log(JSON.parse(thisArticle)["date"]["year"].toString());
        console.log(req.params.year);

        console.log(JSON.parse(thisArticle)["date"]["month"].toString());
        console.log(req.params.month);
        if (
          JSON.parse(thisArticle)["date"]["year"].toString() === req.params.year
        ) {
          if (
            JSON.parse(thisArticle)["date"]["month"].toString() ===
            req.params.month
          ) {
            months.months.push(JSON.parse(thisArticle));
          }
        }
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
module.exports = showByMonth;
