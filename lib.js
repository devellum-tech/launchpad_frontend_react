import axios from 'axios';

const options = {
  baseURL: 'https://api.devellum.in/',
  withCredentials: true,
  timeout: 10000,
};

const API = axios.create(options);

export default API;

