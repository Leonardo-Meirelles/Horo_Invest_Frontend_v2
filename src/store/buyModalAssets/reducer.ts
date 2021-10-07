interface ActionProps {
    type: string
    data: Asset
}

interface InitialStateAssets {
    asset: Asset
}

type Asset = {
    assetId: number
    assetName: string
    assetPrice: number
    assetType: string
}

const INITIAL_STATE: InitialStateAssets = {
    asset: {
        assetId: 0,
        assetName: '',
        assetPrice: 0,
        assetType: ''
    }
}

const reducer = (state = INITIAL_STATE, action: ActionProps) => {
    switch (action.type) {
        case 'SET_ASSETS':
            return { asset: action.data }

        default:
            return state
    }
}

export default reducer