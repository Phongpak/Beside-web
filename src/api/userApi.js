import axios from "../config/axios";

export const updateUser = (input, id) => axios.patch(`/user/${id}`, input);
export const deleteProfileImage = (id) => axios.delete(`/user/${id}`);
