//Dependecies
import React, { Component } from "react";
import '../global/css/general.css'

export class Login extends Component {
  render() {
    return (
      <div className="text-center">
        <div className="form-signin">
          <form action="" form-signin>
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <input className="form-control" type="email" placeholder="Email Account"/>
            <input className="form-control" type="password" placeholder="Email Account"/>
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"/> Remember me
              </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          </form>
        </div>
      </div>
    );
  }
}
