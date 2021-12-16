import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:5000/', /* https://beonlinelibrary.herokuapp.com */
    headers: {
        'Content-Type' : 'application/json',
    }
})

export default axiosClient;