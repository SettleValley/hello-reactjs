import React, { Component } from "react";
import "./css/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="card text-white bg-dark mb-3">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Dark card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;