import { AppDispatch, AppThunk } from "../index"


export const toggleModal = (): AppThunk => {
    return (dispatch: AppDispatch, getState) => {
        const { modal } = getState()
        
        dispatch({type: 'CHANGE_MODAL', open: !modal.open})
    }
}
