import { http } from '../config/http'

interface UserData {
    token: string
    assetName: string
    assetId: string
}
//! alterar nome e dados da rota, pois está igual a de DELETE, e deve ser somente de GET
export const getUserOrders = async (data: UserData) => (

    await http.get(`/:${data.token}/orders/${data.assetName}/:${data.assetId}/delete`)
)

export const deleteUserOrderById = async (data: UserData) => (

    await http.delete(`/:${data.token}/orders/${data.assetName}/:${data.assetId}/delete`)
)
