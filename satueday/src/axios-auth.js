

import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://last-for-today.firebaseio.com'
})

instance.defaults.headers.common['SOMETHIGN'] = 'something'

export default instance;