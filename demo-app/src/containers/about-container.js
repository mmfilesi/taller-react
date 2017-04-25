import React, { Component } from 'react';

import Header from '../components/commons/header';
import Footer from '../components/commons/footer';

class AboutContainer extends Component {
  render() {
    return (
      <section>
        <Header />
            <div>About</div>
        <Footer />
      </section>
    );
  }
}

export default AboutContainer;
