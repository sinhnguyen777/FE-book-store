import axios from 'axios';

const axiosClientAuth = axios.create({
    baseURL: 'http://localhost:5000',
    // https://beonlinelibrary.herokuapp.com
    headers: {
        'Content-Type' : 'application/json',
    }
})


// Interceptors


axiosClientAuth.interceptors.request.use(async (config) => {
  const customHeaders = {};

  const accessToken = localStorage.getItem("token");
  if (accessToken) {
    customHeaders.Authorization = accessToken;
  }

  return {
    ...config,
    headers: {
      ...customHeaders,  // auto attach token
      ...config.headers, // but you can override for some requests
    }
  };
});


export default axiosClientAuth;