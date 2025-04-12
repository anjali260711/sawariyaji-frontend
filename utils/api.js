import axios from 'axios';

const API = axios.create({
  baseURL: 'https://sawariyaji-backend.onrender.com/api', // ← ✅ live backend
});

export default API;
