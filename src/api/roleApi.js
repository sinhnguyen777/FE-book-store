import axiosClient from "./axiosCilent";
import axiosClientAuth from "./axiosClientAuth";


const roleApi={

    GetRole(){
        const url = '/roles';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },
    GetRoleById (id){
        const url = `/roles/${id}`;
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res;
    },
    UpdateRole(data){
        const url = '/roles/edit';
        return axiosClient.put(url , data)
    },
    AddRole(data){
        const url = '/roles/create';
        return axiosClient.post(url , data)
    },
    DelRole( id){
        const url = `/roles/del/${id}`;
        return axiosClientAuth.delete(url)
    },
};

export default roleApi; 