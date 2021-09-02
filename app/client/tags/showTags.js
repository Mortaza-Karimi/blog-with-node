const axios = require("../../../lib/axios");
const showTags = () => {
  axios.get("/api/tags").then((value) => {
    return { response: value.data };
  });
};
module.exports = showTags;
