import { http } from '../config/http'

export const authenticationLoginService = (data:any) => http.post('/login', data)