import React, { Component } from 'react';

import CounterTodos from './counter-todos';
import LifeCycle from './life-cycle';

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

    /* Hay que bindear el this en el constructor para que no se vuelva tarumba
    con los eventos
    + info: http://www.etnassoft.com/2016/06/27/el-metodo-bind-en-javascript-teoria-ejemplos-y-usos-extremos/ */
    this.setTitle = this.setTitle.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
  }

  setTitle() {
    /* Para cambiar el valor de un elemento del estado
      y que React se entere hay que utilizar el método this.setState() */
      this.setState({mainTitle: 'Título cambiado!'});
  }


  handleDeleteTask(_id_) {
    let arrayTemp = this.state.todos.slice();
    let len       = arrayTemp.length;

    while (len--) {
      if ( arrayTemp[len].id === _id_ ) {
        arrayTemp.splice(len, 1);
      }
    }
    this.setState({todos: arrayTemp});
  }

  handleDeleteAll() {
     this.setState({todos: []});
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
    // sobre la manera de pasar la función,  ver: 
    // http://stackoverflow.com/questions/33846682/react-onclick-function-fires-on-render
    const listTodos = this.state.todos.map((item) =>
      <li key={item.id}>{item.task} 
        <span 
          className="taskDone"        
         onClick={ ()=> {this.handleDeleteTask(item.id)} }
        >x - done</span>
      </li>
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
        <p>
          {/* Ojo, no se invoca, sino que se referencia, lo que hacemos
          es pasarle la función al método onClick, si lo pasáramos así:
          this.setTitle()
          se ejecutaría */}
          <button onClick={this.setTitle}>Cambiar titular</button>
        </p>
        {/* Insertamos el subcomponente y le pasamos por props el listado de tareas */}
        <CounterTodos tasks={this.state.todos} delete={this.handleDeleteAll} />  
        {/* Ciclo de vida */}
        <LifeCycle />    
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