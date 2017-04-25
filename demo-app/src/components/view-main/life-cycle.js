import React from 'react';

/* 
Los componentes react con estado(1) tienen tres grandes fases en su ciclo de vida:
    Mounting: montaje
    Mounted: ya está montado
    Unmounting: cuando se desmonta
Cada fase tiene una serie de métodos asociados que nos pueden servir de punto de captura para hacer cosas. Los detallo en el propio componente.

1. Los stateless no tienen ciclo de vida.

Info:
http://survivejs.com/react/getting-started/understanding-react-components/
*/

class LifeCycle extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            foo: 'bar'
        };

        console.log('-- constructor --');
    }

    /* =====================================
        Fase Mounting 
    =====================================*/

    /* 
        Antes de la renderización hay dos eventos que no se usan como punto de captura: 
        1. getDefaultProps - solo con React.createClas
        2. getInitialState 
    */

   /* getDefaultProps() {
        console.log('getDefaultProps');
    } */

    getInitialState() {
        console.log('getInitialState');
    }

    /* 
        3. componentWillMount: 
        se dispara una vez en el cliente y en el servidor antes de cualquier renderización. Puede servir para cargar datos asíncronos y luego forzar la renderización con setState.render(). 
    */
    componentWillMount() {
        console.log('componentWillMount');
        /* Cambiamos el valor que tenía la prop. foo del state. Por ejemplo,
        como resultado de alguna consulta */
        this.setState({foo: 'foo'});
    }

    /* 
        4. render 
    */

    /* 
        5. componentDidMount: se dispara una sola vez en el cliente después de la primera renderización. Ya tenemos acceso al DOM local en este momento. Es de los más importantes. Aquí se pueden realizar request ajax, declarar escuchas, etcétera. En cierta manera, equivale al document.ready de jQuery.
        -> El componentDidMount de los hijos se ejecuta antes que el del padre.
    */
    componentDidMount()  {
        console.log('componentDidMount');
    }

    /* =====================================
        Fase Mounted 
    =====================================*/

    /* 
        componentWillReceiveProps: se ejecuta todas y cada una de las veces que el componente vaya a recibir nuevas propiedades una vez pasado el primer render. Recibe como parámetro las propiedades nuevas que va a recibir.
    */
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        console.log('componentWillReceiveProps');
    }

    /* 
        shouldComponentUpdate: cuando van a cambiar props y state. Si no se diferencian de lo anterior, se puede retornar false y ahorrarnos el render
    */
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        console.log('shouldComponentUpdate');
        return true;
    }

    /* componentWillUpdate: 
        se dispara después del evento anterior, pero antes de render(). No se puede usar setState aquí, pero sí cambiar las propiedades de la instancia. Recibe como parámetros las nuevas propiedades y el nuevo estado que va a tener.
    */
    componentWillUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        console.log('componentWillUpdate');  
    }

    /* 
        componentDidUpdate: se dispara tras la renderización provocada por los eventos de la fase mounted mencionados.
    */
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    /* =====================================
        Fase Unmounting 
    =====================================*/

    /* 
        componentWillUnmount: justo antes de que se desmonte, es decir, se quite del dom.
        Sirve para garbagear basurillas, como los timers o los watchers. Recibe las propiedades y el estado que tenía. Equivaldría al $destroy de angular 1.* 
    */
    componentWillUnmount(prevProps, prevState) {
        console.log('componentWillUnmount');
    }

    render(foo) {
        console.log('-- render --');
        return (
            <div>foo is {this.state.foo} and name {this.props.name}</div>
        );
    }
}

LifeCycle.defaultProps = {
  name: 'Uka Lele'
};

export default LifeCycle