import React, { Component } from 'react';
import { BrowserRouter as Router ,Route,Switch} from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import DashBoard from "./container/Dashboard";

class AppRouter extends Component {
  render() {
     const history = createHistory();
    return ( 
        <Router history={history}>
           <Switch>
           <Route path="/" component={DashBoard} />
           </Switch>
        </Router>      
    );
  }
}

export default AppRouter;
