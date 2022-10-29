import axios from "../config/axios";

export const getChatMessage = (orderId) => axios.get(`/chat/${orderId}`);
export const updateIsSeenChatMessage = (orderId) =>
	axios.patch(`/chat/${orderId}`);
export const getUnseenMessage = (orderId) =>
	axios.get(`/chat/unseen/${orderId}`);
