import axios from 'axios';
import { getTokenLocalStorage } from './storage';
import store from '../store/index';
import { logoutAuthentication } from '../store/authentication/action';

const urlDefault = 'https://api-horo-invest-v2.herokuapp.com';

export const http = axios.create({
    baseURL: urlDefault
});

if (getTokenLocalStorage()) {
    http.defaults.headers['Authorization'] = `bearer ${getTokenLocalStorage()}`
};

http.defaults.headers['Content-Type'] = 'application/json';

http.interceptors.response.use(

    (response) => response,

    (error) => {

        switch (error.response.status) {
            
            case 401:
                store.dispatch(logoutAuthentication() as any)
                return Promise.reject(error)
        
            default:
                return Promise.reject(error)
        }
    }
)