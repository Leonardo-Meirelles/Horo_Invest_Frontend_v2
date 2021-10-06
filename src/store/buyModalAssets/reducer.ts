

const INITIAL_STATE = {
    asset: {
        assetId: '',
        assetName: '',
        assetPrice: '',
        assetType: ''
    }
}

const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case 'SET_ASSETS':
            return { asset: action.data }

        default:
            return state
    }
}

export default reducer