import axios from 'axios';

const api = axios.create({
    baseURL: 'https://amar-dm.herokuapp.com/'
});

export default api;