import axios from "../config/axios";

export const createTransaction = (input) => axios.post("/transaction", input);
