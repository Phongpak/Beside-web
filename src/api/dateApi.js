import axios from "../config/axios";

export const createDateAvailable = (input) =>
	axios.post("/date/available", input);
export const getDateAvailable = async (weekday) =>
	await axios.get(`/date/available/${weekday}`);
export const deleteDateAvailable = (id) =>
	axios.delete(`/date/available/${id}`);

export const createDateUnavailable = (input) =>
	axios.post("date/unavailable", input);
export const deleteDateUnavailable = (id) =>
	axios.delete(`/date/unavailable/${id}`);
export const getUserDateUnavailable = (userId) =>
	axios.get(`/date/unavailable/${userId}`);
