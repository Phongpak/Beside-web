import axios from "../config/axios";

export const getMyOrders = (id) => axios.get(`/order/${id}`);
export const updateOrder = (id, input) => axios.patch(`/order/${id}`, input);
