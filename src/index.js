import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './App.scss';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import store from './store/index';



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRouter />
 
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


