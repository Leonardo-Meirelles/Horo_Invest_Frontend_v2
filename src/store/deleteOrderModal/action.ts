import { AppDispatch, AppThunk } from "../index"

export const deleteOrder = (id: string, asset: string): AppThunk => {
    return (dispatch: AppDispatch) => {
        
        dispatch({type: 'DELETE_ORDER', data: {
            id: id,
            asset: asset
        }})
    }
}
