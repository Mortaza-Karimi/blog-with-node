const fs = require("fs");
const deleteArticle = (req, res) => {
  fs.rmdirSync(`./articles/${req.body.name}`, { recursive: true });
  res.json({ status: "ok" });
};
module.exports = deleteArticle;
