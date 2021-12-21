import axiosClient from "./axiosCilent";
import axiosClientAuth from "./axiosClientAuth";

const userApi = {
  GetAll() {
    const url = "/users";
    const res = axiosClient.get(url).then((res) => {
      return res.data;
    });
    return res;
  },
  AccessToken(data) {
    const url = "/users/access-token";
    return axiosClient.post(url, data);
  },
  verifyEmail(data) {
    const url = "/users/verify-email";
    return axiosClient.post(url, data);
  },
  GetUserById(id) {
    const url = `/users/${id}`;
    const res = axiosClient.get(url).then((res) => {
      return res.data;
    });
    return res;
  },
  Register(data) {
    const url = "/users/register";
    return axiosClient.post(url, data);
  },
  Login(data) {
    const url = "/users/login";
    return axiosClient.post(url, data);
  },
  LoginGG(data) {
    const url = "/users/login-gg";
    return axiosClient.post(url, data);
  },
  Update(data) {
    const url = "/users/edit";
    return axiosClient.post(url, data);
  },
  DelCata(id) {
    const url = `/catalogs/del/${id}`;
    return axiosClientAuth.delete(url);
  },
};

export default userApi;
