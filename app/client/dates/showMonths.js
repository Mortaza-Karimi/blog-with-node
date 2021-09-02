const fs = require("fs");
const showMonths = () => {
  axios.get(`/api/months`).then((value) => {
    return { response: value.data };
  });
};
module.exports = showMonths;
