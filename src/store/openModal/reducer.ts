interface ActionProps { 
    type: string
    open: boolean
}

interface InitialStateOpen {
    open: boolean
}

const INITIAL_STATE: InitialStateOpen = {
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