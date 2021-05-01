import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import routes from './routes'

const Router = () => (
  <>
    <Switch>
      {routes.map(({
        Comp, exact, key, layout = true, path
      }) => (
        <Route
          path={path}
          key={key}
          exact={exact}
          render={
            () => (layout ? <Layout Comp={Comp} /> : <Comp />)
          }
        />
      ))}
      )
    </Switch>
  </>
)

export default Router
