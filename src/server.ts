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
                    { id: 1, stockName: 'OIBR3', stockPrice: 5.50 },
                    { id: 2, stockName: 'Vivo', stockPrice: 7.50 },
                    { id: 3, stockName: 'MGLU3', stockPrice: 3.20 },
                    { id: 4, stockName: 'Claro', stockPrice: 2.50 },
                    { id: 5, stockName: 'PTBR3', stockPrice: 1.00 },
                    { id: 6, stockName: 'PTBR3', stockPrice: 1.00 },
                    { id: 7, stockName: 'PTBR3', stockPrice: 1.00 },
                    { id: 8, stockName: 'PTBR3', stockPrice: 1.00 },
                    { id: 9, stockName: 'PTBR3', stockPrice: 1.00 },
                    { id:10, stockName: 'PTBR3', stockPrice: 1.00 },
                    { id:11, stockName: 'PTBR3', stockPrice: 1.00 },
                    { id:12, stockName: 'PTBR3', stockPrice: 1.00 },
                ],
                cryptos: [
                    { id: 1, cryptoName: 'bitcoin', cryptoPrice: 5.50 },
                    { id: 2, cryptoName: 'dogcoin', cryptoPrice: 7.50 },
                    { id: 3, cryptoName: 'ethereum', cryptoPrice: 3.20 },
                    { id: 4, cryptoName: 'dogcoin', cryptoPrice: 2.50 },
                    { id: 5, cryptoName: 'dogcoin', cryptoPrice: 12.90 },
                    { id: 6, cryptoName: 'dogcoin', cryptoPrice: 2.43 },
                    { id: 7, cryptoName: 'dogcoin', cryptoPrice: 7.99 },
                    { id: 8, cryptoName: 'dogcoin', cryptoPrice: 6.99 },
                    { id: 9, cryptoName: 'dogcoin', cryptoPrice: 1.56 },
                    { id:10, cryptoName: 'dogcoin', cryptoPrice: 1.22 },
                    { id:11, cryptoName: 'dogcoin', cryptoPrice: 2.45 },
                    { id:12, cryptoName: 'dogcoin', cryptoPrice: 4.31 },
                ]
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
        },
    })
}