import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './../i18n/i18n';
//pages
import HomePage from '../Pages/Home';
import Page2 from '../Pages/Page2';

const AppRouter = () => {


  return (
    <>
      <I18nextProvider i18n={i18n}>
        
           <Switch>
            <Route exact path={`/`} component={HomePage} />
            <Route exact path='/page2' component={Page2} />
            <Route>
              <div> 404 not found</div>
            </Route>
          </Switch>
       </I18nextProvider>
    </>
  )
}
export default AppRouter