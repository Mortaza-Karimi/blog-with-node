const fs = require("fs");
const addArticle = (req, res) => {
  if (
    !req.body.name &&
    !req.body.category &&
    !req.body.tags &&
    !req.body.year &&
    !req.body.month &&
    !req.body.content
  ) {
    res.json({ status: "fail" });

    return;
  }
  try {
    fs.mkdir(`./articles/${req.body.name}`);
  } catch (e) {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end("Error 500 : Internal Server Error");
    return;
  }
  try {
    fs.writeFileSync(
      `./articles/${req.body.name}/${req.body.name}.md`,
      req.body.content
    );
  } catch (e) {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end("Error 500 : Internal Server Error");
    return;
  }
  const jsonData = {
    name: req.body.name,
    category: req.body.category,
    tags: req.body.tags,
    date: {
      year: req.body.year,
      month: req.body.month,
    },
  };
  try {
    fs.writeFile(
      `./articles/${req.body.name}/data.json`,
      JSON.stringify(jsonData)
    );
  } catch (e) {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end("Error 500 : Internal Server Error");
    return;
  }

  res.json({ status: "ok" });
};
module.exports = addArticle;
