import { http } from '../config/http'

interface GetCurrencyPromise {
    id: number
    currency_name: string
    currencyPrice: number
    currencyPriceBefore: number
    status: boolean
}

const pathCurrencies = '/currencies'

export const getCurrenciesService = async (): Promise<GetCurrencyPromise[]> => (
    await http.get(pathCurrencies)
).data || []

