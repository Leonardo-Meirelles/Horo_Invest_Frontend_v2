import { AppDispatch, AppThunk } from "../index"

export const setModalAssets = (
    assetId: number,
    assetName: string,
    assetPrice: number,
    assetType: string,
    assetCurrency: string): AppThunk => {

    return async (dispatch: AppDispatch) => {

        const asset = {
            assetId,
            assetName,
            assetPrice,
            assetType,
            assetCurrency
        }

        dispatch({ type: 'SET_ASSETS', data: asset })
    }
}