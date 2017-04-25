import React, { Component } from 'react';
/* Lo instalamos antes
yarn add prop-types --save
*/
import PropTypes from 'prop-types';

/* Este componente podría ser una función en lugar de una clase,
ya que carece de estado */
class CounterTodos extends Component {
  /* Añadimos un constructor */
  constructor (...args) {
    super(...args); 
  }

  render(...props) {
    return (
      <div>
        <p className="counter-tasks">
          Número de tareas por hacer: {this.props.tasks.length}
        </p>
        <p>
          {/* Las propiedades NO pueden modificarse,
          así que llamamos a una función que recibimos
          del componente madre, donde sí que se puede
          modificar el estado */}
          <button onClick={this.props.delete}>Eliminar todas las tareas</button>
        </p>
      </div>
    )
  }

}

/* Es buena práctica utilizar PropTypes para tipar las propiedades */
CounterTodos.propTypes = {
  tasks: PropTypes.array,
  delete: PropTypes.func
};

export default CounterTodos;

