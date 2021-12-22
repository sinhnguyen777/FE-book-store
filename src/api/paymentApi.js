import axiosClient from "./axiosCilent";

const paymentApi = {
    async PostDataPayment(data) {
        const url = '/pay'
        return await axiosClient.post(url, data)
    },
    async GetdataVip() {
        const url = 'pay/success'
        const res = axiosClient.get(url)
            .then(res => {
                return res.data
            })
        return await res
    }

}

export default paymentApi;