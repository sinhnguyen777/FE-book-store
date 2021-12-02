import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://beonlinelibrary.herokuapp.com ', /* https://beonlinelibrary.herokuapp.com */
    headers: {
        'Content-Type' : 'application/json',
    }
})

export default axiosClient;