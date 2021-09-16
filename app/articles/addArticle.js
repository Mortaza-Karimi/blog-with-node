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
  // try {
  fs.mkdirSync(`./articles/${req.body.name}`);
  // } catch (e) {
  //   res.writeHead(500, { "Content-Type": "text/html" });
  //   res.end("Error 500 : Internal Server Error");
  //   return;
  // }
  // try {
  fs.writeFileSync(
    `./articles/${req.body.name}/${req.body.name}.md`,
    req.body.content
  );
  // } catch (e) {
  //   res.writeHead(500, { "Content-Type": "text/html" });
  //   res.end("Error 500 : Internal Server Error");
  //   return;
  // }
  const jsonData = {
    name: req.body.name,
    category: req.body.category,
    tags: req.body.tags,
    content: req.body.content,
    date: {
      year: req.body.year,
      month: req.body.month,
      day: req.body.day,
    },
  };
  // try {
  fs.writeFileSync(
    `./articles/${req.body.name}/data.json`,
    JSON.stringify(jsonData)
  );
  // } catch (e) {
  //   res.writeHead(500, { "Content-Type": "text/html" });
  //   res.end("Error 500 : Internal Server Error");
  //   return;
  // }

  res.json({ status: "ok" });
};
module.exports = addArticle;
