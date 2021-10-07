import { http } from '../config/http'

interface GetCurrencyPromise {
    id: number
    currencyName: string
    currencyPrice: number
    currencyPriceBefore: number
}

const pathCurrencies = '/currencies'

export const getCurrenciesService = async (): Promise<GetCurrencyPromise[]> => (
    await http.get(pathCurrencies)
).data.currencies || []

