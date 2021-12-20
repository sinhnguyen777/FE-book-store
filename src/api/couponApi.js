import axiosClient from "./axiosCilent";
import axiosClientAuth from "./axiosClientAuth";


const couponApi={

    GetCoupon(){
        const url = '/discountCodes';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },
    GetCataById (id){
        const url = `/catalogs/${id}`;
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res;
    },
    UpdateCata(data){
        const url = '/catalogs/edit';
        return axiosClientAuth.put(url , data)
    },
    AddCata(data){
        const url = '/catalogs/create';
        return axiosClientAuth.post(url , data)
    },
    DelCata(id){
        const url = `/catalogs/del/${id}`;
        return axiosClientAuth.delete(url)
    },
};

export default couponApi; 