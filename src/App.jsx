//Dependecies
import React, { Component } from "react";
//Components
import Navbar from "./components/global/Navbar.jsx";
import Footer from "./components/global/Footer.jsx";
import { AppRoutes } from "./components/routes.jsx";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="Content-Component">
          <div className="container">
            <AppRoutes />
          </div>
        </div>
        <div className="Footer-Component">
          <Footer />
        </div>
      </div>
    );
  }
}
