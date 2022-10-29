import axios from "../config/axios";

export const updateUser = (input, id) => axios.patch(`/user/${id}`, input);
export const deleteProfileImage = (id) => axios.delete(`/user/${id}`);
export const getProfileImages = (id) => axios.get(`/user/profileImages/${id}`);
export const getTransactionByUserId = () => axios.get(`/transaction`);
export const getMyOrders = (id) => axios.get(`/order/${id}`);
export const updateOrder = (input, id) => axios.patch(`/order/${id}`, input);
