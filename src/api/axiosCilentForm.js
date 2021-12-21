import axios from "axios";

const axiosClientForm = axios.create({
  baseURL:
    "https://beonlinelibrary.herokuapp.com" /* https://beonlinelibrary.herokuapp.com https://beonlinelibrary.herokuapp.com' */,
  headers: { "Content-Type": "multipart/form-data" },
});

export default axiosClientForm;
