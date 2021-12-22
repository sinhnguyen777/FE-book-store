import axiosClient from "./axiosCilent";
import axiosClientAuth from "./axiosClientAuth";


const adminApi = {

    GetAll(filter) {
        const url = '/admins/';
        console.log(filter);
        const res = axiosClient.get(url, { params: filter })
            .then(res => {
                return res.data;
            })
        return res
    },
    Register(data) {
        const url = '/admins/register';
        return axiosClientAuth.post(url, data)
    },
    ChangePass(data) {
        const url = '/admins/change-password';
        return axiosClient.post(url, data);
    },
    LoginAdmin(data) {
        const url = '/admins/login';
        return axiosClient.post(url, data)
    },
    SendMail(data) {
        const url = '/admins/forgot-password';
        return axiosClient.post(url, data)
    },
    AccessToken(data) {
        const url = '/admins/access-token';
        return axiosClient.post(url, data)
    },
    NewPass(data) {
        const url = '/admins/newpass';
        return axiosClient.post(url, data)
    }
};

export default adminApi;