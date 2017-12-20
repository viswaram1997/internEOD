import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Signup extends Component {
  render() {
    return (
      <div>
          <label>name</label>
        <input type="text" name="name"/>
        <label>username</label>
        <input type="text" name="username"/>
        <label>password</label>
        <input type="text" name="password"/>
        <button>Signup</button>
        <Link to="/login">login</Link>

      </div>
    )
  }
}
