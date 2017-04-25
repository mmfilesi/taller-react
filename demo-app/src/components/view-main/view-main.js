/*
  Cuando el componente tiene lógica, lo convertimos en una clase
  para gestionar métodos y datos, estos últimos en el "estado" */

/* import React from 'react';

const ViewMain = () => {
  return (
    <article className="view-main">Aquí irá el tinglado</article>
  )
}

export default ViewMain;
*/


import React, { Component } from 'react';

class ViewMain extends Component {
  /* Añadimos un constructor */
  constructor (...args) {
    super(...args); 

    /* El estado se inicializa en el constructor */
    this.state = {
      mainTitle: 'Cosas por hacer',
      todos: [
        {id: 0, task: 'Emparejar calcetines'},
        {id: 1, task: 'Preparar ceremonia del té'},
        {id: 2, task: 'Adoptar un hipopótamo'}
      ]
    };
  
  }

  /* Esto se podría -y debería- hacer directamente en el render, lo saco fuera para que veamos
  que podemos tratar el jsx en otro método. La otra forma sería en el render así:
    <ul>
      {this.state.todos.map((item) =>
        <li key={item.id}>{item.task}</li>
       )
      }
    </ul>
   */
  renderTodos() {
    // ver notas adicionales sobre el uso de map
    const listTodos = this.state.todos.map((item) =>
      <li key={item.id}>{item.task}</li>
    );
    return (
      <ul>{listTodos}</ul>
    );
  }

  render() {
    return (
      <article className="view-main">
        <h5>{this.state.mainTitle}</h5>
        {this.renderTodos()}
        {!this.state.todos.length &&
          <p>Muy bien, todo hecho</p>
        }
        {this.state.todos.length &&
          <p>Hey, faltan cosas por hacer</p>
        }
        {/* Otra forma con el ternario */}
        {!this.state.todos.length ? (
          <p>Muy bien, todo hecho</p>
        ) : (
          <p>Hey, faltan cosas por hacer</p>
        )}        
      </article>
    );
  }
}

export default ViewMain;

/* Notas adicionales

1. Listas
El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

¡Ojo, hay que añadir una key!

*/