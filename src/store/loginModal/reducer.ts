// Estado inicial
// Função que retorna o estado
// Export do estado como default

interface ActionProps { 
    type: string
    open: boolean
}

const INITIAL_STATE = {
    open: false
}

const reducer = (state = INITIAL_STATE, action: ActionProps) => {
    switch (action.type) {
        case 'CHANGE_OPEN':
            state.open = action.open
            return { open: action.open}

        case 'CHANGE_CLOSE':
            state.open = action.open
            return { open: action.open}
    
        default:
            return state
    }
}

export default reducer