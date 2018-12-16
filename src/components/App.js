import React, { Component } from 'react';

//Components
import Navbar from './global/Navbar';
import Content from './global/Content';
import Footer from './global/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="Content-Component">
          <div className="container">
              <Content />
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
