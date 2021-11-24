import axiosClient from "./axiosCilent";


const cataApi={

    GetCata(){
        const url = '/catalogs';
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
        return axiosClient.put(url , data)
    },
    AddCata(data){
        const url = '/catalogs/create';
        return axiosClient.post(url , data)
    },
    DelCata(id){
        const url = `/catalogs/del/${id}`;
        return axiosClient.delete(url)
    },
};

export default cataApi; 