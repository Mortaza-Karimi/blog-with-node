const { json } = require("body-parser");
const fs = require("fs");
const addCategory = (req, res) => {
  if (!req.body.category) {
    res.json({ status: "fail" });
    return;
  }
  var categories = JSON.parse(
    fs.readFileSync(`./app/categories/categories.json`, "utf-8")
  );
  categories.categories.push(req.body.category);
  console.log(categories.categories);
  fs.writeFileSync(
    `./app/categories/categories.json`,
    JSON.stringify(categories)
  );

  res.json({ status: "ok" });
};
module.exports = addCategory;
