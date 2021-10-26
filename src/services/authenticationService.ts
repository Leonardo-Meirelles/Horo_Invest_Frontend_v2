import { LoginForm } from '../components/portal/loginModal'
import { http } from '../config/http'

interface AuthLoginService {
    data: {
        type: string
        token: string
    }
}

export const authenticationLoginService = async (data: LoginForm): Promise<AuthLoginService> => (
    await http.post("/login", data)
)

export const authenticationRegisterService = async (data: LoginForm): Promise<AuthLoginService> => (
    await http.post('/register', data)
)
