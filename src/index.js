import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import  './App.scss';

import {BrowserRouter} from 'react-router-dom';

 

ReactDOM.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>,
  document.getElementById('root')
);


