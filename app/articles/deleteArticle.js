const fs = require("fs");
const deleteArticle = (req, res) => {
  try {
    fs.rmdirSync(`./articles/${req.body.name}`, { recursive: true });
  } catch (e) {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end("Error 500 : Internal Server Error");
    return;
  }
  res.json({ status: "ok" });
};
module.exports = deleteArticle;
