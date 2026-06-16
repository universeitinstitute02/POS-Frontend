import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:5000/api/',
  // baseURL: 'https://mern-pos-backend.vercel.app/api/',
  baseURL: 'http://127.0.0.1:8000/',
});

export default api;
