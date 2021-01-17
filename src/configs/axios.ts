import axios from 'axios';

import settings from './settings';

const api = axios.create({
    baseURL: settings.baseUrl,
});

export default api;
