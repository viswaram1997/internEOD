import React, { Component } from 'react';
import { BrowserRouter as Router ,Route,Switch} from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import DashBoard from "./container/Dashboard";
import LoginPage from "./container/LoginPage"

class AppRouter extends Component {
  render() {
     const history = createHistory();
    return ( 
        <Router history={history}>
           <Switch>
           <Route path="/" component={LoginPage} />
           </Switch>
        </Router>      
    );
  }
}

export default AppRouter;
