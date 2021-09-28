import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import LoginModalReducer from './loginModal/reducer'

const reducers = combineReducers({
    modal: LoginModalReducer
})

//middlewares
const middlewares = []

//composição de middleware com ferramentas de devtools
const compose = composeWithDevTools(applyMiddleware())

//criar store
const store = createStore(reducers, compose)

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

