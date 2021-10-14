import { AppDispatch, AppThunk } from "../index"
import { authenticationLoginService } from "../../services/authenticationService"
import { removeTokenLocalStorage, saveTokenLocalStorage } from "../../config/storage"
import { http } from './../../config/http';
import { navigate } from "@reach/router";
import { LoginForm } from './../../components/portal/loginModal'
import toast from "react-hot-toast";

export const loginAuthentication = (data: LoginForm): AppThunk => {

    return async (dispatch: AppDispatch, getState) => {

        dispatch({ type: 'AUTH_LOADING', data: true })

        try {
            
            const responseToken = await authenticationLoginService(data)

            saveTokenLocalStorage(responseToken.data.token)

            http.defaults.headers['Authorization'] = `bearer ${responseToken.data.token}`

            dispatch({ type: 'AUTH_LOGIN', data: responseToken.data.token })

            const userRouterOutput = getState().authentication.type?.route || '/'
            
            navigate(userRouterOutput)            

            dispatch({ type: 'AUTH_LOADING', data: false })

        } catch (error) {

            dispatch({ type: 'AUTH_LOADING', data: false })
            
            toast.error('User not found')
        }
    }
}

export const logoutAuthentication = (): AppThunk => {

    return async (dispatch: AppDispatch) => {

        try {

            removeTokenLocalStorage()

            dispatch({ type: 'AUTH_LOGOUT' })

            navigate('/')

        } catch (error) {

            dispatch({ type: 'AUTH_LOADING', data: false })
        }
    }
}