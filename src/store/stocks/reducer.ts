interface ActionProps {
    type: string
    data: [{
        id: number
        stockName: string
        stockPrice: number
    }]
}

interface InitialStateStocks {
    stocks: {
        id: number
        stockName: string
        stockPrice: number
    }[]
}

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

export default reducer;