import React, { Component } from 'react';

import './App.css';

// import ComponenteSimple from './components/view-main/componente-simple';

import Header from './components/commons/header';
import Footer from './components/commons/footer';

import ViewMain from './components/view-main/view-main';

class App extends Component {
  render() {
    return (
      <section> {/* Debe devolverse 1 solo nodo root /> */}
        {/* <ComponenteSimple /> */}
        <Header />
        <ViewMain />
        <Footer />
      </section>
    );
  }
}

export default App;
