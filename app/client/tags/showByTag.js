const axios = require("../../../lib/axios");
const showByTag = (tag) => {
  axios.get(`/api/tags/${tag}`).then((value) => {
    return { response: value.data };
  });
};
module.exports = showByTag;
