import axios from 'axios';

const axiosClientForm = axios.create({
    baseURL: 'https://beonlinelibrary.herokuapp.com', /* https://beonlinelibrary.herokuapp.com http://localhost:5000' */
    headers: { 'Content-Type': 'multipart/form-data' }
})

export default axiosClientForm;