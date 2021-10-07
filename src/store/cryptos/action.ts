import { AppDispatch, AppThunk } from "../index"
import { getCryptosService } from '../../services/cryptosServices'

export const getCryptos = (): AppThunk => {

    return async (dispatch: AppDispatch) => {

        const cryptos = await getCryptosService()

        dispatch({type: 'GET_CRYPTOS', data: cryptos.map(item => ({
            ...item, id: Number(item.id)
        }))})
    }
}