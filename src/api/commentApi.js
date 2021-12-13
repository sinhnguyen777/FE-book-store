import axiosClient from "./axiosCilent";
import axiosClientAuth from "./axiosClientAuth";


const commentApi={

    GetComment(id){
        const url = `/comment/idProduct/${id}`;
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },
    GetCommentById (id){
        const url = `/comment/${id}`;
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res;
    },
    UpdateComment(data){
        const url = '/comment/edit';
        return axiosClientAuth.put(url , data)
    },
    AddComment(data){
        const url = '/comment/create';
        return axiosClientAuth.post(url , data)
    },
    DelComment(id){
        const url = `/comment/del/${id}`;
        return axiosClientAuth.delete(url)
    },
};

export default commentApi; 