import { http } from '../config/http'

interface UserData {
    assetName: string
    assetId: string
}
//! alterar nome e dados da rota, pois está igual a de DELETE, e deve ser somente de GET
export const getUserOrdersService = async (data: UserData) => (

    await http.get(`/user/orders/${data.assetName}/:${data.assetId}/delete`)
)

export const deleteUserOrderByIdService = async (data: UserData) => (

    await http.delete(`/user/orders/${data.assetName}/:${data.assetId}/delete`)
)

// export const postNewOrderService = async () => (

//     await http.post(`/${data.assetName}/:${data.assetId}/order`)
// ) 

export const changeUserEmailService = async (data: string) => (

    await http.patch(`/user/profile/email/:${data}`)
)

export const changeUserPasswordService = async (data: string) => (

    await http.patch(`/user/profile/password/:${data}`)
)