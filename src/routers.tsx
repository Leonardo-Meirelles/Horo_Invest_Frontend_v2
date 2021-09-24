import { Router } from '@reach/router'
import { Portal } from './views/portal/index'

export function Routers() {

  return (
    <Router>
        <Portal path='/*' />
    </Router>
  )
}


