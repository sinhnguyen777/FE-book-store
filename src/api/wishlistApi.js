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
    DelWishList(data){
        const url = '/wishlish/del/';
        return axiosClientAuth.delete(url,data)
    },
};

export default wishlistApi; 