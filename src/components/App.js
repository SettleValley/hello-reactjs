//Dependecies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Components
import Navbar from './global/Navbar';
import Content from './global/Content';
import Footer from './global/Footer';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const {children} = this.props;
    return (
      <div className="App">
        <Navbar/>
        <div className="Content-Component">
          <div className="container">
              <Content body={children} />
          </div>
        </div>
        <div className="Footer-Component">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
