import axios from 'axios';

const API = axios.create({
  baseURL: 'https://sawariyaji-backend.onrender.com', // ✅ YOUR backend URL
});

export default API;
