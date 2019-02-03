//Dependecies
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../global/css/general.css'

export class Login extends Component {
  render() {
    return (
      <div className="text-center">
        <div className="form-signin">
          <form action="/auth/instagram" method="POST">
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <input className="form-control" type="text" placeholder="Name Account"/>
            <input className="form-control" type="password" placeholder="Email Account"/>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"/> Remember me
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          </form>
        </div>
        <Link to="/auth/instagram">Login with instagram</Link>
      </div>
    );
  }
}
