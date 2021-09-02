const fs = require("fs");
const showByMonth = (req, res) => {
  axios
    .get(
      `http://localhost:2000/api/years/${req.params.year}/${req.params.month}`
    )
    .then((value) => {
      res.json({ response: value.data });
    });
};
module.exports = showByMonth;
