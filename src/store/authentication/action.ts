import { AppDispatch, AppThunk } from "../index"
import { authenticationLoginService } from "../../services/authenticationService"
import { saveTokenLocalStorage } from "../../config/storage"
import { http } from './../../config/http';

export const loginAuthentication = (data: any): AppThunk => {

    return async (dispatch: AppDispatch) => {

        dispatch({ type: 'AUTH_LOADING', data: true })

        try {
            console.log('chegou no try');
            
            const responseToken = await authenticationLoginService(data)
            console.log('chegou no response');
            saveTokenLocalStorage(responseToken.data.token)
            console.log('chegou no saveToken');
            http.defaults.headers['Authorization'] = `bearer ${responseToken.data.token}`
            console.log('chegou no bearer');
            dispatch({ type: 'AUTH_LOGIN', data: responseToken.data.token })
            console.log('chegou no login');
            dispatch({ type: 'AUTH_LOADING', data: false })
            console.log('chegou no loading');
        } catch (error) {
            console.log('chegou no erro');
            dispatch({ type: 'AUTH_LOADING', data: false })
            
            throw error

        }
    }
}