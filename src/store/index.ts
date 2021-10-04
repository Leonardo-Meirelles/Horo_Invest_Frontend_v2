import { Action, applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import LoginModalReducer from './loginModal/reducer'
import StocksReducer from './stocks/reducer'
import thunk, { ThunkAction } from 'redux-thunk'

const reducers = combineReducers({
    modal: LoginModalReducer,
    stocks: StocksReducer
})

//middlewares
const middlewares = [thunk]

//composição de middleware com ferramentas de devtools
const compose = composeWithDevTools(applyMiddleware(...middlewares))

//criar store
const store = createStore(reducers, compose)

export default store


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
