import axiosClient from "./axiosCilent";
import axiosClientAuth from "./axiosClientAuth";


const commentApi={

    GetComment(){
        const url = '/comment';
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
        return axiosClient.put(url , data)
    },
    AddComment(data){
        const url = '/comment/create';
        return axiosClient.post(url , data)
    },
    DelComment(id){
        const url = `/comment/del/${id}`;
        return axiosClient.delete(url)
    },
};

export default commentApi; 