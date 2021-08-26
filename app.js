const showArticles = require("./app/articles/showArticles");
const showArticle = require("./app/articles/showArticle");
const showByCategories = require("./app/categories/showByCategories");
const showCategories = require("./app/categories/showCategories");
const showByTag = require("./app/tags/showByTag");
const showTags = require("./app/tags/showTags");
const showByYear = require("./app/dates/showByYear");
const showYears = require("./app/dates/showYears");
const showByMonth = require("./app/dates/showByMonth");
const showMonths = require("./app/dates/showMonths");
const express = require("express");
const app = express();

app.get("/api/server-running", function (req, res) {
  res.json({ status: "ok" });
});

app.get("/api/articles", showArticles);
app.get("/api/article/:article", showArticle);
app.get("/api/categories/:category", showByCategories);
app.get("/api/categories", showCategories);
app.get("/api/tags", showTags);
app.get("/api/tags/:tag", showByTag);
app.get("/api/years/:year", showByYear);
app.get("/api/years", showYears);
app.get("/api/years/:year/:month", showByMonth);
app.get("/api/months", showMonths);

app.listen(2000);

module.exports = app;
