const axiosDefault = require("axios").default;

const axios = new axiosDefault.create({
  baseURL: "https://localhost:2000",
});

module.exports = axios;
