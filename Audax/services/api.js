import axios from 'axios';

const api =  axios.create({
    baseURL: 'https://api.github.com/users/wartelon/repos'
})

export default api;