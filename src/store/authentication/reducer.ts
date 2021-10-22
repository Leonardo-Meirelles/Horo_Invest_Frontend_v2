import jwt, { JwtPayload } from 'jsonwebtoken'
import { getTokenLocalStorage } from "../../config/storage"
import { enumRoles } from '../../utils/enumRoles'

interface ActionProps {
    type: string
    data?: string | boolean | any
}

interface InitialStateAuthData {
    token: string
    user: {
        id: string
        name: string
        email: string
        password: string
        user_type: 1 | 2
        status: boolean
    } | JwtPayload
    type?: {
        type: 'User' | 'Admin'
        code: 1 | 2
        route: '/user' | '/admin'
    }
    loading: boolean
}

const INITIAL_STATE: InitialStateAuthData = {
    token: getTokenLocalStorage() || '',
    user: jwt.decode(getTokenLocalStorage() || '') as JwtPayload || {},
    type: enumRoles((jwt.decode(getTokenLocalStorage() || '') as JwtPayload)?.user_type) || undefined,
    loading: false
}

const reducer = (state = INITIAL_STATE, action: ActionProps): InitialStateAuthData => {
    switch (action.type) {
        case 'AUTH_LOADING':
            return {
                ...state,
                loading: action.data
            }

        case 'AUTH_LOGIN':
            return {
                ...state,
                token: action.data,
                user: jwt.decode(action.data) as JwtPayload,
                type: enumRoles((jwt.decode(action.data) as JwtPayload)?.user_type)
            }

        case 'AUTH_LOGOUT':
            return {
                ...state,
                token: '',
                user: {},
                type: undefined
            }

        default:
            return state
    }
}

export default reducer