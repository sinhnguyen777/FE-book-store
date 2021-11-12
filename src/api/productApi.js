import axiosClient from "./axiosCilent";


const prouctApi={

    GetProducts(){
        const url = '/product';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },
    GetProductsById(id){
        const url = `/product/${id}`;
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },
    GetProductsNew(){       
        const url = '/product';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        .then(data=>{
            const getdata = data.filter(item=>item.productNew === true);
            return getdata
        })
        return res
    },
    GetProductsHot(){       
        const url = '/product';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        .then(data=>{
            let getdata = data.filter(item=>item.productHot === true)
            console.log(getdata);
            return getdata;
        })
        return res
    },
    GetProductsByCataID(id){       
        const url = '/product';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        .then(data=>{
            const getdata = data.filter(item=>item.idCata == id);
            return getdata
        })
        return res
    },GetCmt(){
        const url = '/product';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    }, Getkh(){
        const url = '/user';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },
};

export default prouctApi; 