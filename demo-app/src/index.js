/* 
Importamos React y el paquete ReactDom,
que sirve para enlazar nuestros componentes de react
con el DOM de la web
*/

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

/*
 Con el método render de ReactDom lanzamos el tinglado.
 En el primer parámetro le pasamos el JSX a renderizar,
 en el segundo el nodo del DOM normal en el que debe
 engancharse
 */

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
