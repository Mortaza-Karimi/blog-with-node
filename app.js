const checkApp = require("./app/checkApp");
if (!checkApp()) {
  return;
}
const articles = require("./app/articles/index");
const categories = require("./app/categories/index");
const dates = require("./app/dates/index");
const tags = require("./app/tags/index");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.static("./views"));

app.use(bodyParser.json({ extended: true }));

app.use(function (req, res, next) {
  console.log(`${req.method} request for route : ${decodeURI(req.url)}`);

  next();
});

app.get("/api/server-running", function (req, res) {
  res.json({ status: "ok" });
});

// Artciel routs
app.get("/api/articles", articles.showArticles);
app.get("/api/article/:article", articles.showArticle);
app.post("/api/articles", articles.addArticle);
app.put("/api/articles", articles.updateArticle);
app.patch("/api/articles", articles.updateArticle);
app.delete("/api/articles/:article", articles.deleteArticle);

// Category routs
app.get("/api/categories/:category", categories.showByCategories);
app.get("/api/categories", categories.showCategories);
app.post("/api/categories", categories.addCategory);

// Tag routs
app.get("/api/tags", tags.showTags);
app.get("/api/tags/:tag", tags.showByTag);

// Date routs
app.get("/api/years/:year", dates.showByYear);
app.get("/api/years", dates.showYears);
app.get("/api/years/:year/:month", dates.showByMonth);
app.get("/api/months", dates.showMonths);

app.listen(2000);
console.log("\n\nListining on : http://localhost:2000\n\n");

module.exports = app;
