import axiosClient from "./axiosCilent";


const vipApi={

    GetVip(){
        const url = '/vip';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },
    GetVipById (id){
        const url = `/vip/${id}`;
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res;
    },
    UpdateVip(data){
        const url = '/vip/edit';
        return axiosClient.put(url , data)
    },
    AddVip(data){
        const url = '/vip/create';
        return axiosClient.post(url , data)
    },
    DelVip(id){
        const url = `/vip/del/${id}`;
        return axiosClient.delete(url)
    },
};

export default vipApi; 