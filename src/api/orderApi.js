import axiosClient from "./axiosCilent";
import axiosClientAuth from "./axiosClientAuth";

const orderApi = {
  GetOrder(filter) {
    const url = "/orders/";
    const res = axiosClient.get(url,{ params: filter }).then((res) => {
      return res.data;
    });
    return res;
  },
  GetOrderById(id) {
    const url = "/orders/"+id;
    const res = axiosClient.get(url).then((res) => {
      return res.data;
    });
    return res;
  },
  GetOrderDetail(filter) {
    const url = "/orderDetails/";
    const res = axiosClient.get(url,{ params: filter }).then((res) => {
      return res.data;
    });
    return res;
  },
  verifyOrder(data) {
    const url = "/orders/verify-order";
    return axiosClient.post(url, data);
  },
  Send(data) {
    const url = "/orders/confirm";
    const res = axiosClientAuth.put(url, data).then((res) => {
      return res.data;
    });
    return res;
  },
  Cancel(data) {
    const url = "/orders/cancle";
    const res = axiosClient.put(url, data).then((res) => {
      return res.data;
    });
    return res;
  },
  GetCataById(id) {
    const url = `/catalogs/${id}`;
    const res = axiosClient.get(url).then((res) => {
      return res.data;
    });
    return res;
  },
  UpdateCata(data) {
    const url = "/catalogs/edit";
    return axiosClient.put(url, data);
  },
  AddOrder(data) {
    const url = "orders/create";
    return axiosClient.post(url, data);
  },
  DelCata(id) {
    const url = `/catalogs/del/${id}`;
    return axiosClientAuth.delete(url);
  },
};

export default orderApi;
