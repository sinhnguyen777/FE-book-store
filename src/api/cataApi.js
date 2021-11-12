import axiosClient from "./axiosCilent";


const cataApi={

    GetCata(){
        const url = '/catalogs';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    }
};

export default cataApi; 