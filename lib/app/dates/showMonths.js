import axios from "../axios";
const showMonths = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api/months`)
      .then((value) => {
        resolve(value.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
export default showMonths;
