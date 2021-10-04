import axios from 'axios'

const urlDefault = 'https://localhost:3000/api'

export const http = axios.create({
    baseURL: urlDefault
})