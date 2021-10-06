import { Action, applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import OpenModalReducer from './openModal/reducer'
import BuyModalReducer from './buyModalAssets/reducer'
import StocksReducer from './stocks/reducer'
import CryptosReducer from './cryptos/reducer'
import thunk, { ThunkAction } from 'redux-thunk'

const reducers = combineReducers({
    modal: OpenModalReducer,
    modalAssets: BuyModalReducer,
    stocks: StocksReducer,
    cryptos: CryptosReducer,
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
