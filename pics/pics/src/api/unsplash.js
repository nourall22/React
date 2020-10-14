import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID R5TJfC3kcdNB6Kn__BqQxGfmusimKp316XHeWXRKirg' 
      }
})