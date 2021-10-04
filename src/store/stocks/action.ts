import { AppDispatch, AppThunk } from "../index"
import { getStocksService } from "../../services/stocksService"

export const getStocks = (): AppThunk => {

    return async (dispatch: AppDispatch) => {
        
        const stocks = await getStocksService()        

        dispatch({type: 'GET_STOCKS', data: stocks.data.stocks})
    }
}