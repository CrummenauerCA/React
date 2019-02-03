import axios from 'axios';

const api = axios.create({
    base: 'https://rocketseat-node.herokuapp.com/api'
});

export default api;

