import axiosClient from "./axiosCilent";
import axiosClientAuth from "./axiosClientAuth";


const prouctApi={

    AddProduct(data){
        const url = '/products/create';
        return axiosClientAuth.post(url , data)
    },
    GetProducts(filter) {
        const url = '/products';
        const res = axiosClient.get(url,{ params: filter })
            .then(res => {
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
    GetProductsSale(){       
        const url = '/products';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        .then(data=>{
            const getdata = data.filter(item=>item.productSale === true);
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
            const getdata = data.filter(item=>item.idCatalog === id);
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
    UpdateProduct(data){
        const url = '/products/update';
        return axiosClientAuth.put(url , data)
    },
    UpdateDateDebut(data){
        const url = '/products//update-dateDebut';
        return axiosClientAuth.put(url , data)
    },
    DelProducts(id){
        const url = `/products/del/${id}`;
        return axiosClientAuth.delete(url)
    },
    ProductsSelling(){
        const url = '/products/selling';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },
    ProductsUserTop(){
        const url = '/products/user-sell';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },
};

export default prouctApi; 