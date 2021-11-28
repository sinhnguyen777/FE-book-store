import axiosClient from "./axiosCilent";


const prouctApi={

    GetProducts(){
        const url = '/products';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },
    GetProductsById(id){
        const url = `/products/${id}`;
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },
    GetProductsBySlug(slug){
        const url = `/products/slug/${slug}`;
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },
    GetProductsNew(){       
        const url = '/products';
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
        const url = '/products';
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
        const url = '/products';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        .then(data=>{
            const getdata = data.filter(item=>item.idCata == id);
            return getdata
        })
        return res
    },
    GetProductsByname(name){       
        const url = `/products/searchName?nameProduct=${name}`;
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },
    
    GetProductsByauthor(author){       
        const url = `/products/searchAuthor?author=${author}`;
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },
    GetCmt(){
        const url = '/products';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },
    Getkh(){
        const url = '/user';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },
};

export default prouctApi; 