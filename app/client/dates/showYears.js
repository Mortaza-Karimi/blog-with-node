const fs = require("fs");
const showYears = () => {
  axios.get(`/api/years`).then((value) => {
    return { response: value.data };
  });
};
module.exports = showYears;
