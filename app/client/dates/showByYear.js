const fs = require("fs");
const showByYear = (req, res) => {
  axios
    .get(`http://localhost:2000/api/years/${req.params.year}`)
    .then((value) => {
      res.json({ response: value.data });
    });
};
module.exports = showByYear;
