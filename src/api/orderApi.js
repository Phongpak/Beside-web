import axios from "../config/axios";

export const getMyOrders = (id) => axios.get(`/order/${id}`);
