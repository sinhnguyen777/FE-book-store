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
    GetCouponById (id){
        const url = `/discountCodes/${id}`;
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res;
    },
    UpdateCoupon(data){
        const url = '/discountCodes/edit';
        return axiosClientAuth.put(url , data)
    },
    AddCoupon(data){
        const url = '/discountCodes/create';
        return axiosClientAuth.post(url , data)
    },
    DelCoupon(id){
        const url = `/discountCodes/del/${id}`;
        return axiosClientAuth.delete(url)
    },
};

export default couponApi; 