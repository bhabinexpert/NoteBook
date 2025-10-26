import axios from 'axios';

const api = axios.create({
    baseURL: "https://notebook-2iaf.onrender.com/api",
})

export default api;