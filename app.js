const checkApp = require("./app/server/checkApp");
if (!checkApp()) {
  return;
}
const articles = require("./app/server/articles/index");
const categories = require("./app/server/categories/index");
const dates = require("./app/server/dates/index");
const tags = require("./app/server/tags/index");

const client_articles = require("./app/client/articles/index");
const client_categories = require("./app/client/categories/index");
const client_dates = require("./app/client/dates/index");
const client_tags = require("./app/client/tags/index");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json({ extended: true }));

app.use(function (req, res, next) {
  console.log(`${req.method} request for route : ${req.url}`);

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

// Client routs

// Artciel routs
app.get("/articles", client_articles.showArticles);
app.get("/article/:article", client_articles.showArticle);
app.post("/articles", client_articles.addArticle);
app.put("/articles", client_articles.updateArticle);
app.patch("/articles", client_articles.updateArticle);
app.delete("/articles/:article", client_articles.deleteArticle);

// Category routs
app.get("/categories/:category", client_categories.showByCategories);
app.get("/categories", client_categories.showCategories);
app.post("/categories", client_categories.addCategory);

// Tag routs
app.get("/tags", client_tags.showTags);
app.get("/tags/:tag", client_tags.showByTag);

// Date routs
app.get("/years/:year", client_dates.showByYear);
app.get("/years", client_dates.showYears);
app.get("/years/:year/:month", client_dates.showByMonth);
app.get("/months", client_dates.showMonths);

app.listen(2000);
console.log("\n\nListining on : http://localhost:2000\n\n");

module.exports = app;
