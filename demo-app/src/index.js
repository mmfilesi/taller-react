/* 
Importamos React y el paquete ReactDom,
que sirve para enlazar nuestros componentes de react
con el DOM de la web
*/

import React from 'react';
import ReactDOM from 'react-dom';
/* (Antes se utilizaba otra fórmula compatible con navegadores antiguos, ahora el HashRouter).
Lo importamos después de instalarlo
yarn add react-router-dom
 */
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import './index.css';

import MainContainer from './containers/main-container';
import AboutContainer from './containers/about-container';


ReactDOM.render(
 <HashRouter>
    <Switch>
      <Route exact path='/' render={ () => <Redirect to='/main' /> } />
      <Route path='/main' component={ MainContainer } />
      <Route path='/about' component={ AboutContainer } />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);