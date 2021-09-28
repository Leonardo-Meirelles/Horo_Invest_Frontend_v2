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
        case 'CHANGE_MODAL':
            return { open: action.open}
    
        default:
            return state
    }
}

export default reducer