import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinderbackend1819.herokuapp.com",
});
export default instance;
