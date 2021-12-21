import axiosClient from "./axiosCilent";

const PostDataPayment = async (data) => {
    const url = '/pay'
    return await axiosClient.post(url, data)
}

export default PostDataPayment;