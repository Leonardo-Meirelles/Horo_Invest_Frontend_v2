import { Router } from '@reach/router'
import { LayoutPrivate } from './components/private/layout/layout'
import { Portal } from './views/portal/index'

export function Routers() {

  return (
    <Router>
        <Portal path='/*' />
        <LayoutPrivate path='/private' />
    </Router>
  )
}


