import axiosClient from "./axiosCilent";
import axiosClientAuth from "./axiosClientAuth";


const wishlistApi={

    GetWishlist(id){
        const url = '/wishlish/';
        const res = axiosClient.get(url,{params: id})
        .then(res=>{
            return res.data;
        })
        return res
    },
    AddWishlist(data){
        const url = '/wishlish/create';
        return axiosClientAuth.post(url , data)
    },
    DelWishList(data){
        const url = '/wishlish/del/';
        return axiosClientAuth.delete(url,{params: data})
    },
};

export default wishlistApi; 