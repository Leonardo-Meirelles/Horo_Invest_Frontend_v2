interface ActionProps {
    type: string
    data: InitialStateId
}

interface InitialStateId {
    id: string
    asset: string
}

const INITIAL_STATE: InitialStateId = {
    id: '',
    asset: ''
}

const reducer = (state = INITIAL_STATE, action: ActionProps) => {
    switch (action.type) {
        case 'DELETE_ORDER':
            return {
                id: action.data.id,
                asset: action.data.asset
            }

        default:
            return state
    }
}

export default reducer