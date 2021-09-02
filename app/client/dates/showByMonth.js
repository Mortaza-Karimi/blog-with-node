const fs = require("fs");
const showByMonth = (year, month) => {
  axios.get(`/api/years/${year}/${month}`).then((value) => {
    return { response: value.data };
  });
};
module.exports = showByMonth;
