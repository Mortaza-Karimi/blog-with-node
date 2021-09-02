const fs = require("fs");
const showYears = (req, res) => {
  axios.get(`http://localhost:2000/api/years`).then((value) => {
    res.json({ response: value.data });
  });
};
module.exports = showYears;
