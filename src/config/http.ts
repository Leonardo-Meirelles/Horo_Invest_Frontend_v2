import axios from 'axios'
import { getTokenLocalStorage } from './storage'

const urlDefault = 'http://localhost:3333'

export const http = axios.create({
    baseURL: urlDefault
})

if (getTokenLocalStorage()) {
    http.defaults.headers['Authorization'] = `bearer ${getTokenLocalStorage()}`
}

http.defaults.headers['Content-Type'] = 'application/json'