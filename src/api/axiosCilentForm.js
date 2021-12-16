import axios from "axios";

const axiosClientForm = axios.create({
  baseURL:
    "http://localhost:5000" /* https://beonlinelibrary.herokuapp.com http://localhost:5000' */,
  headers: { "Content-Type": "multipart/form-data" },
});

export default axiosClientForm;
