const fs = require("fs");
const showMonths = (req, res) => {
  axios.get(`http://localhost:2000/api/months`).then((value) => {
    res.json({ response: value.data });
  });
};
module.exports = showMonths;
