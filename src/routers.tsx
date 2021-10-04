import { Router } from '@reach/router'
import { Portal } from './views/portal/index'
import { Private } from './views/private'

export function Routers() {

  return (
    <Router>
        <Portal path='/*' />
        
        <Private path='/user/*' />
    </Router>
  )
}


