import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d98c4eede7f847293c73f3b08e35c9412898ed0568b39f361a3553e3abec69d5'
    }
});