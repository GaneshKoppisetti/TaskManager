import axios from 'axios';
const URL = 'http://localhost:4000/api';
const api = axios.create({
    baseURL: URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});
export default api;