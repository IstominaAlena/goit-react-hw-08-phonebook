import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const path = {
  SIGNUP: '/users/signup',
  LOGIN: '/users/login',
  LOGOUT: '/users/logout',
  CURRENT: '/users/current',
};
