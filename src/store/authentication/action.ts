import { AppDispatch, AppThunk } from "../index"
import { authenticationLoginService, authenticationRegisterService } from "../../services/authenticationService"
import { removeTokenLocalStorage, saveTokenLocalStorage } from "../../config/storage"
import { http } from './../../config/http';
import { navigate } from "@reach/router";
import { LoginForm } from './../../components/portal/loginModal'
import toast from "react-hot-toast";

export const loginAuthentication = (data: LoginForm): AppThunk => {

    return async (dispatch: AppDispatch, getState) => {

        const { modal } = getState()

        dispatch({ type: 'AUTH_LOADING', data: true })

        try {
            console.log(data);
            
            const responseToken = await authenticationLoginService(data)
            console.log('chegou aqui ####################');
            

            saveTokenLocalStorage(responseToken.data.token)

            http.defaults.headers['Authorization'] = `bearer ${responseToken.data.token}`

            dispatch({ type: 'AUTH_LOGIN', data: responseToken.data.token })

            const userRouterOutput = getState().authentication.type?.route || '/'

            dispatch({ type: 'CHANGE_MODAL', open: !modal.open }) 

            navigate(userRouterOutput)

            dispatch({ type: 'AUTH_LOADING', data: false })

        } catch (error) {

            dispatch({ type: 'AUTH_LOADING', data: false })

            toast.error('User not found')
        }
    }
}

export const registerAuthentication = (data: LoginForm): AppThunk => {

    return async (dispatch: AppDispatch, getState) => {

        const { modal } = getState()

        dispatch({ type: 'AUTH_LOADING', data: true })

        try {

            await authenticationRegisterService(data)

            toast.success(`User ${data.name} created successfully`, {
                duration: 4000,
                position: "top-right"
            })

            dispatch({ type: 'CHANGE_MODAL', open: !modal.open })

            dispatch({ type: 'AUTH_LOADING', data: false })

        } catch (error) {

            dispatch({ type: 'AUTH_LOADING', data: false })

            toast.error('Something went wrong with your request')
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
