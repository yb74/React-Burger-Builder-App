import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-burger-builder-app-8cd31.firebaseio.com/"
});

export default instance;