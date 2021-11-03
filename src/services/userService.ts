import { http } from '../config/http'

interface AssetData {
    assetName: string
    assetId?: number | string
}

export const getUserCryptosOrdersService = async ({assetName}: AssetData) => (

    await http.get(`/${assetName}/orders`)
);

export const getUserStocksOrdersService = async ({assetName}: AssetData) => (

    await http.get(`/${assetName}/orders`)
);

export const deleteUserOrderByIdService = async (data: AssetData) => (

    await http.delete(`/user/orders/${data.assetName}/${data.assetId}/delete`)
);

export const postNewOrderService = async (data: any) => (
    
    await http.post(`/${data.assetName}/${data.assetId}/order`, data.orderData)
)

export const changeUserEmailService = async (data: string) => (

    await http.patch(`/user/profile/email/${data}`)
);

export const changeUserPasswordService = async (data: string) => (

    await http.patch(`/user/profile/password/${data}`)
);