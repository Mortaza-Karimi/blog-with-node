import axiosDefault from "axios";
const axios = new axiosDefault.create({
  baseURL: "http://localhost:2000",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default axios;
