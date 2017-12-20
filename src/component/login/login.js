import React, { Component } from 'react';
import SignUp from "./signup";
import {Link} from "react-router-dom"
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            
        }
        this.GetUserData=this.GetUserData.bind(this);
        this.Login=this.login.bind(this);
    }
GetUserData(e){
    this.setState({
        [e.target.name]:e.target.value
    });

}
login(){
    
}
    
  render() {
    return (
      <div>          
          <label>username</label>
        <input type="text" name="username" value={this.state.username} onChange={this.GetUserData}/>
        <label>password</label>
        <input type="password" name="password" value={this.state.password} onChange={this.GetUserData} />
        <button OnClick={this.login}>Login</button>
        <Link to="/signup">signup</Link>
        <SignUp {...this.props}/>

      </div>
    )
  }
}
