import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const path = {
  SIGNUP: '/users/signup',
  LOGIN: '/users/login',
  LOGOUT: '/users/logout',
  CURRENT: '/users/current',
};

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const signupUserAPI = async user => {
  const { data } = await axios.post('/users/signup', user);
  token.set(data.token);
  return data;
};

export const loginUserAPI = async user => {
  const { data } = await axios.post(path.LOGIN, user);
  return data;
};
