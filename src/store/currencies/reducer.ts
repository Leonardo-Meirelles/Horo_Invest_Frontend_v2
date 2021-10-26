interface ActionProps {
    type: string
    data: Currencies
}

interface InitialStateCurrencies {
    currencies: Currencies
}
 
type Currencies = {
    id: number
    currencyName: string
    currencyPrice: number
    currencyPriceBefore: number
    status: boolean
}[]

const INITIAL_STATE: InitialStateCurrencies = {
    currencies: []
}

const reducer = (state = INITIAL_STATE, action:ActionProps) => {
    switch (action.type) {
        case 'GET_CURRENCIES':
            return {...state, currencies: action.data}
    
        default:
            return state
    }
}

export default reducer