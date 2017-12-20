import React, { Component } from 'react';
import DisplayDashboard from "./DisplayDashboard";

export default class DashBoard extends Component {
  // componentDidMount() {

  // }
  render() {

    return (
      <div>
       <DisplayDashboard {...this.props}/>

      </div>
    )
  }
}
