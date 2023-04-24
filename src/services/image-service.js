import axios from 'axios';

const API_KEY = '34181261-dc9f612f556ce5adee055f5bd';
axios.defaults.baseURL = 'https://pixabay.com/';

export const getImages = async (query, page) => {
    const options = {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true',
            page: page,
            per_page: 12,
        },
    };
    const { data } = await axios('api/', options);
    return data;
};
