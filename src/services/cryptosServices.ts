import { http } from '../config/http'

interface GetCryptoPromise {
    id: number
    cryptoName: string
    cryptoPrice: number
    cryptoPriceBefore: number
}

const pathCryptos = '/cryptos'

export const getCryptosService = async (): Promise<GetCryptoPromise[]> => (
    await http.get(pathCryptos)
).data.cryptos || []