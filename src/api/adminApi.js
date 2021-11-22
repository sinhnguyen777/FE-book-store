import axiosClient from "./axiosCilent";


const adminApi={

    Register(data){
        const url = '/admins/register';
        return axiosClient.post(url , data)
    },
    LoginAdmin(data){
        const url = '/admins/register';
        return axiosClient.post(url , data)
    }
};

export default adminApi; 