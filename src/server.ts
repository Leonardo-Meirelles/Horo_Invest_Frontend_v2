import { createServer, Model } from 'miragejs'

export function server() {
    createServer({
        models: {
            stock: Model,
        },

        seeds(server) {
            server.db.loadData({
                stocks: [
                    { id: 1, stockName: 'OIBR3', stockPrice: 5.50 },
                    { id: 2, stockName: 'Vivo', stockPrice: 7.50 },
                    { id: 3, stockName: 'MGLU3', stockPrice: 3.20 },
                    { id: 4, stockName: 'Claro', stockPrice: 2.50 },
                    { id: 5, stockName: 'PTBR3', stockPrice: 1.00 },
                ]
            })
        },

        routes() {
            this.namespace = 'api'

            this.get('/stocks', () => {
                return this.schema.all('stock')
            })
        },
    })
}