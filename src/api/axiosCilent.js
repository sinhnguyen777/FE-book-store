import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://be-library-online.onrender.com" /* https://beonlinelibrary.herokuapp.com */ /*  http://localhost:5000 */,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosClient;