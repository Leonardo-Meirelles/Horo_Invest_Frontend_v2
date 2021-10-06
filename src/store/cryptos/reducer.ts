interface ActionProps {
    type: string
    data: Cryptos
}

interface InitialStateStocks {
    cryptos: Cryptos
}

type Cryptos = {
    id: number
    cryptoName: string
    cryptoPrice: number
}[]

const INITIAL_STATE: InitialStateStocks = {
    cryptos: []
}


const reducer = (state = INITIAL_STATE, action: ActionProps) => {
    switch (action.type) {
        case 'GET_CRYPTOS':
            return {...state, cryptos: action.data}
    
        default:
            return state
    }
}

export default reducer