const fs = require("fs");
const showByYear = (year) => {
  axios.get(`/api/years/${year}`).then((value) => {
    return { response: value.data };
  });
};
module.exports = showByYear;
