import ReactDOM from 'react-dom'
import './config/starter'
import { Routers } from './routers'
import { GlobalStyles } from './assets/styles/globalStyles'
import { Provider } from 'react-redux'
import store from './store/index'
import { Toaster } from 'react-hot-toast'
// import { server } from './server'

// server()

ReactDOM.render(
  <Provider store={store}>

    <Routers />
    <GlobalStyles />
    <Toaster />

  </Provider>,

  document.getElementById('root')
)