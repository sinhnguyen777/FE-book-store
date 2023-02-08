import axios from "axios";

const axiosClientForm = axios.create({
  baseURL:
    "https://be-library-online.onrender.com" /* https://be-library-online.onrender.com http://localhost:5000' */,
  headers: { "Content-Type": "multipart/form-data" },
});

export default axiosClientForm;
