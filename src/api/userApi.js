import axiosClient from "./axiosCilent";
import axiosClientAuth from "./axiosClientAuth";


const userApi={

    GetCata(){
        const url = '/catalogs';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },
    GetUserById (id){
        const url = `/users/${id}`;
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res;
    },
    UpdateCata(data){
        const url = '/catalogs/edit';
        return axiosClient.put(url , data)
    },
    AddCata(data){
        const url = '/catalogs/create';
        return axiosClient.post(url , data)
    },
    DelCata(id){
        const url = `/catalogs/del/${id}`;
        return axiosClientAuth.delete(url)
    },
};

export default userApi; 