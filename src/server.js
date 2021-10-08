import { createServer, Model } from 'miragejs'

export function server() {
    createServer({
        models: {
            stock: Model,
            crypto: Model,
            currency: Model,
        },

        seeds(server) {
            server.db.loadData({
                stocks: [
                    { id: 1, stockName: 'OIBR3', stockPrice: 5.50, stockPriceBefore: 5.50, },
                    { id: 2, stockName: 'Vivo', stockPrice: 7.50, stockPriceBefore: 7.49 },
                    { id: 3, stockName: 'MGLU3', stockPrice: 3.20, stockPriceBefore: 3.21 },
                    { id: 4, stockName: 'Claro', stockPrice: 2.50, stockPriceBefore: 2.51 },
                    { id: 5, stockName: 'PTBR3', stockPrice: 1.00, stockPriceBefore: 1.11 },
                    { id: 6, stockName: 'PTBR3', stockPrice: 1.00, stockPriceBefore: 0.99 },
                    { id: 7, stockName: 'PTBR3', stockPrice: 1.00, stockPriceBefore: 1.01 },
                    { id: 8, stockName: 'PTBR3', stockPrice: 1.00, stockPriceBefore: 1.01 },
                    { id: 9, stockName: 'PTBR3', stockPrice: 1.00, stockPriceBefore: 0.89 },
                    { id: 10, stockName: 'PTBR3', stockPrice: 1.00, stockPriceBefore: 1.01 },
                    { id: 11, stockName: 'PTBR3', stockPrice: 1.00, stockPriceBefore: 0.70 },
                    { id: 12, stockName: 'PTBR3', stockPrice: 1.00, stockPriceBefore: 1.01 },
                ],
                cryptos: [
                    { id: 1, cryptoName: 'bitcoin', cryptoPrice: 5.50, cryptoPriceBefore: 5.56 },
                    { id: 2, cryptoName: 'dogcoin', cryptoPrice: 7.50, cryptoPriceBefore: 7.53 },
                    { id: 3, cryptoName: 'ethereum', cryptoPrice: 3.20, cryptoPriceBefore: 3.20 },
                    { id: 4, cryptoName: 'dogcoin', cryptoPrice: 2.50, cryptoPriceBefore: 2.70 },
                    { id: 5, cryptoName: 'dogcoin', cryptoPrice: 12.90, cryptoPriceBefore: 12.94 },
                    { id: 6, cryptoName: 'dogcoin', cryptoPrice: 2.43, cryptoPriceBefore: 2.20 },
                    { id: 7, cryptoName: 'dogcoin', cryptoPrice: 7.99, cryptoPriceBefore: 7.58 },
                    { id: 8, cryptoName: 'dogcoin', cryptoPrice: 6.99, cryptoPriceBefore: 6.69 },
                    { id: 9, cryptoName: 'dogcoin', cryptoPrice: 1.56, cryptoPriceBefore: 1.57 },
                    { id: 10, cryptoName: 'dogcoin', cryptoPrice: 1.22, cryptoPriceBefore: 1.24 },
                    { id: 11, cryptoName: 'dogcoin', cryptoPrice: 2.45, cryptoPriceBefore: 2.35 },
                    { id: 12, cryptoName: 'dogcoin', cryptoPrice: 4.31, cryptoPriceBefore: 4.21 },
                ],
                currencies: [
                    { id: 1, currencyName: 'lalalal', currencyPrice: 5.50, currencyPriceBefore: 5.56 },
                    { id: 2, currencyName: 'dogcoin', currencyPrice: 7.50, currencyPriceBefore: 7.53 },
                    { id: 3, currencyName: 'ethereum', currencyPrice: 3.20, currencyPriceBefore: 3.20 },
                    { id: 4, currencyName: 'dogcoin', currencyPrice: 2.50, currencyPriceBefore: 2.70 },
                    { id: 5, currencyName: 'dogcoin', currencyPrice: 12.90, currencyPriceBefore: 12.94 },
                    { id: 6, currencyName: 'dogcoin', currencyPrice: 2.43, currencyPriceBefore: 2.20 },
                    { id: 7, currencyName: 'dogcoin', currencyPrice: 7.99, currencyPriceBefore: 7.58 },
                    { id: 8, currencyName: 'dogcoin', currencyPrice: 6.99, currencyPriceBefore: 6.69 },
                    { id: 9, currencyName: 'dogcoin', currencyPrice: 1.56, currencyPriceBefore: 1.57 },
                    { id: 10, currencyName: 'dogcoin', currencyPrice: 1.22, currencyPriceBefore: 1.24 },
                    { id: 11, currencyName: 'dogcoin', currencyPrice: 2.45, currencyPriceBefore: 2.35 },
                    { id: 12, currencyName: 'dogcoin', currencyPrice: 4.31, currencyPriceBefore: 4.21 },
                ],
            })
        },

        routes() {
            this.namespace = 'api'

            this.get('/stocks', () => {
                return this.schema.all('stock')
            })

            this.get('/cryptos', () => {
                return this.schema.all('crypto')
            })

            this.get('/currencies', () => {
                return this.schema.all('currency')
            })

            this.post('/login', (schema, request) => {
                let attr = JSON.parse(request.requestBody)
                if (
                    attr.email == 'leonardomeirelles@terra.com.br'
                    &&
                    attr.password == 12345
                ) {
                    return {
                        type: 'bearer',
                        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6Imxlb25hcmRvbWVpcmVsbGVzQHRlcnJhLmNvbS5iciIsInBhc3N3b3JkIjoiMTIzNDUiLCJ1c2VyX3R5cGUiOjF9.WE59vgRnM1rulS57FBobaXXbWuO0tHJMvQWI6eRx6Tk'
                    }

                } else {
                    throw new Error('Não deu certo')
                }
            })
        },
    })
}