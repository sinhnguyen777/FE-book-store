import axiosClient from "./axiosCilent";


const  statisticalApi={

    GetAllOrder(){
        const url = '/statistical/order';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },
    GetAllOrderWaiting(){
        const filter = {
            status:false,
            cancel: false
        };
        const url = '/statistical/order';
        const res = axiosClient.get(url,{ params:filter})
        .then(res=>{
            return res.data;
        })
        return res
    },
    GetAllOrderDone(){
        const filter = {
            status:true,
        };
        const url = '/statistical/order';
        const res = axiosClient.get(url,{ params:filter})
        .then(res=>{
            return res.data;
        })
        return res
    },
    GetDataChart(){
        const url = '/statistical/order/by-date';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },
    GetTotal(){
        const url = 'statistical/order/revenue';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },
};

export default statisticalApi; 