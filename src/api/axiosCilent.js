import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:5000" /* https://beonlinelibrary.herokuapp.com *//*  http://localhost:5000 */,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
