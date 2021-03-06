import { getCurrenciesService } from "../../services/currenciesService"
import { AppDispatch, AppThunk } from "../index"

export const getCurrencies = (): AppThunk => {

    return async (dispatch: AppDispatch) => {

        const currencies = await getCurrenciesService()

        dispatch({type: 'GET_CURRENCIES', data: currencies.map(item => ({
            id: Number(item.id),
            currencyName: item.currency_name,
            status: item.status
        }))})
    }
}