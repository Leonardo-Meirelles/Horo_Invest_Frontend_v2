import { AppDispatch, AppThunk } from "../index"

export const setModalAssets = (assetId:any, assetName:any, assetPrice:any, assetType:any): AppThunk => {

    return async (dispatch: AppDispatch) => {

        const asset = {
            assetId, 
            assetName, 
            assetPrice,
            assetType
        }
        
        dispatch({type: 'SET_ASSETS', data: asset})
    }
}