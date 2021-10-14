import { Redirect, Router } from '@reach/router'
import { Portal } from './views/portal/index'
import { Private } from './views/private'
import { isAuthenticated } from './config/storage';

export function Routers() {

  const PrivateRoute = ({ component: Component, ...rest }: any) => {

    if (!isAuthenticated()) {
      console.log('não está auth');

      return <Redirect to={'/'} noThrow />
    }
    //! Explicar essa parte
    // if (isAuthenticated()) {
    //   console.log('está auth');

    //   return <Redirect to='/user' noThrow/>
    // }
    return <Component {...rest} />
  }

  return (
    <Router>
      <Portal path='/*' />

      <PrivateRoute component={Private} path='/user/*' />
    </Router>
  )
}


