import { http } from '../config/http'

export const getAllUsersService = async () => (

    await http.get(`/users`)
)

export const addAssetToDataBaseService = async (data: any) => (

    await http.post(`/`)
)