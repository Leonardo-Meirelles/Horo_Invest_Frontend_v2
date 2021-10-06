interface ActionProps {
    type: string
    data: Stocks
}

interface InitialStateStocks {
    stocks: Stocks
}
 
type Stocks = {
    id: number
    stockName: string
    stockPrice: number
    stockPriceBefore: number
}[]

const INITIAL_STATE: InitialStateStocks = {
    stocks: []
}

const reducer = (state = INITIAL_STATE, action: ActionProps) => {
    switch (action.type) {
        case 'GET_STOCKS':
            return { ...state, stocks: action.data }

        default:
            return state
    }
}

export default reducer