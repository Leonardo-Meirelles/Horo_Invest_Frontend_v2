import { Redirect, Router } from '@reach/router'
import { Portal } from './views/portal/index'
import { Private } from './views/private'
import { isAuthenticated } from './config/storage';

export function Routers() {

  const PrivateRoute = ({ component: Component, ...rest }: any) => {

    if (!isAuthenticated()) {
      
      return <Redirect to={'/'} noThrow />
    }

    return <Component {...rest} />
  }

  return (
    <Router>
      <Portal path='/*' />

      <PrivateRoute component={Private} path='/user/*' />
    </Router>
  )
}


