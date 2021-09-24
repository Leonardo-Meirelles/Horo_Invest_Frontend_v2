import React from 'react'
import ReactDOM from 'react-dom'
import './config/starter'
import { Routers } from './routers'
import { GlobalStyles } from './assets/styles/globalStyles'

ReactDOM.render(
  <React.Fragment>

    <Routers />
    <GlobalStyles />

  </React.Fragment>,
  document.getElementById('root')
)

