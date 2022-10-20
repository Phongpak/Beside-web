import axios from '../config/axios';

export const login = ({ email, password }) =>
  axios.post('/auth/login', { email, password });
export const register = (input) => axios.post('/auth/register', input);

export const getUser = () => axios.get('/auth/user');
