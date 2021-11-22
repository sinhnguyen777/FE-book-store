import axiosClient from "./axiosCilent";
import axiosClientAuth from "./axiosClientAuth";


const permissionApi={

    GetPermission(){
        const url = '/permissions';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },
    GetPermissionById (id){
        const url = `/permissions/${id}`;
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res;
    },
    UpdatePermission(data){
        const url = '/permissions/edit';
        return axiosClient.put(url , data)
    },
    AddPermission(data){
        const url = '/permissions/create';
        return axiosClient.post(url , data)
    },
    DelPermission( id){
        const url = `/permissions/del/${id}`;
        return axiosClientAuth.delete(url)
    },
};

export default permissionApi; 