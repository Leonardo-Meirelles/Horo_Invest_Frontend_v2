import { http } from '../config/http'

interface GetCryptoPromise {
    id: string
    stockName: string
    stockPrice: number
}

const pathCryptos = '/cryptos'

export const getCryptosService = async (): Promise<GetCryptoPromise[]> => (
    await http.get(pathCryptos)).data.cryptos || []