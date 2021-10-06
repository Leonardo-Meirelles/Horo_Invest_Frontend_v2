interface ActionProps {
    type: string
    data: Cryptos
}

interface InitialStateCryptos {
    cryptos: Cryptos
}

type Cryptos = {
    id: number
    cryptoName: string
    cryptoPrice: number
    cryptoPriceBefore: number
}[]

const INITIAL_STATE: InitialStateCryptos = {
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