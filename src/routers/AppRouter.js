import React from 'react'
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/Home';
import Page2 from '../pages/Page2';

const AppRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/page2' component={Page2} />
        <Route>
          <div>not found</div>
        </Route>

      </Switch>
    </>
  )
}
export default AppRouter