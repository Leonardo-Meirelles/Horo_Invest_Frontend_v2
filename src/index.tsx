import React from 'react'
import ReactDOM from 'react-dom'
import './config/starter'
import { Routers } from './routers'
import { GlobalStyles } from './assets/styles/globalStyles'
import { Provider } from 'react-redux'
import store from './store/index'

ReactDOM.render(
  <Provider store={store}>

    <Routers />
    <GlobalStyles />

  </Provider>,
  document.getElementById('root')
)

