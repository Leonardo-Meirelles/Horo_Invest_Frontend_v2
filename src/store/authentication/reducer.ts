import jwt from 'jsonwebtoken'
import { getTokenLocalStorage } from "../../config/storage"
import { enumRoles } from '../../utils/enumRoles'


const INITIAL_STATE = {
    token: getTokenLocalStorage() || '',
    user: jwt.decode(getTokenLocalStorage() || '') || {},
    type: enumRoles((jwt.decode(getTokenLocalStorage() || '') as any)?.user_type) || {},
    loading: false
}

const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case 'AUTH_LOADING':
            return { ...state, loading: action.data }

        case 'AUTH_LOGIN':
            return {
                ...state,
                token: action.data,
                user: jwt.decode(action.data),
                type: enumRoles((jwt.decode(action.data) as any)?.user_type)
            }

        default:
            return state
    }
}

export default reducer