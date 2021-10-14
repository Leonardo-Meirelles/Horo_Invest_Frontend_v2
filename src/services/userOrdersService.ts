import { http } from '../config/http'

interface UserData {
    userEmail: string
}

const pathOrders = '/orders'

export const getUserOrders = async (userEmail: UserData) => (

    await http.get(`${pathOrders}/:${userEmail}`)
)