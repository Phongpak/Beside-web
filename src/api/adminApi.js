import axios from "../config/axios";

export const getUser = () => axios.get(`/admin/user/`);
export const deleteUser = (id) => axios.delete(`/admin/user/${id}`);
export const getTransaction = () => axios.get(`/admin/transaction/`);
export const getOrder = () => axios.get(`/admin/order/`);
export const updateUser = (id, input) => axios.patch(`/user/${id}`, input);
export const updateTransaction = (id, input) =>
  axios.patch(`/transaction/${id}`, input);
