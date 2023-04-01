import React from 'react';
import { Header } from './components/Header/';
import { Orders } from './components/Orders';
import {GlobalStyles} from './styles/GlobalStyles';

/*
  reduce
  Intl.NumberFormat
*/


export function App(){
  return(
    <React.Fragment>
      <GlobalStyles />
      <Header />
      <Orders />
    </React.Fragment>
  );
}
