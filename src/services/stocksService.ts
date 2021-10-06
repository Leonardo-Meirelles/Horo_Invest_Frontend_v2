import { http } from '../config/http'

interface GetStocksPromise {
    id: string
    stockName: string
    stockPrice: number
}

const pathStocks = '/stocks'

export const getStocksService = async (): Promise<GetStocksPromise[]> => (await http.get(pathStocks)).data.stocks || []