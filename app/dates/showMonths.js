const fs = require("fs");
const showMonths = (req, res) => {
  const months = { months: [] };

  try {
    const dirFileList = fs.readdirSync("articles");
  } catch (e) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("Error 404 : not found");
    return;
  }

  dirFileList.map(function (value, index) {
    try {
      const thisArticle = fs.readFileSync(
        `articles/${value}/data.json`,
        "utf-8"
      );
    } catch (e) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("Error 404 : not found");
      return;
    }

    months.months.push(
      JSON.parse(thisArticle)["date"]["year"] +
        " / " +
        JSON.parse(thisArticle)["date"]["month"]
    );
  });

  res.json(months);
};
module.exports = showMonths;
