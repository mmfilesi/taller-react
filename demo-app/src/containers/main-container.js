import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/commons/header';
import Footer from '../components/commons/footer';
import ViewMain from '../components/view-main/view-main';

class MainContainer extends Component {
  
  static propTypes = {
    history: PropTypes.object
  }
  
  navigateTo(path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <section>        
        <Header />
        <ViewMain />
        <button onClick={ () => this.navigateTo('/about') }>About</button>
        <Footer />
      </section>
    );
  }
}

export default MainContainer;
