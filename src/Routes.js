import React, { Component } from 'react';
import {Router, Route, Switch} from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import Dashboard from "./container/Dashboard";
import LoginRegister from "./container/LoginRegister"
import MentorDashboard from './component/MentorDashboard';

class AppRouter extends Component {
  render() {
     const history = createHistory();
    return ( 
        <Router history={history}>
           <Switch>
              <Route path="/" component={MentorDashboard} exact={true} />
              <Route path="/dashboard" component={Dashboard} />
           </Switch>
        </Router>      
    );
  }
}

export default AppRouter;
