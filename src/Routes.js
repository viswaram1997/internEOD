import React, { Component } from 'react';
import { BrowserRouter as Router ,Route,Switch} from "react-router-dom";

import createHistory from 'history/createBrowserHistory';
import DashBoard from "./container/StoreData";
import MentorDashboard from './component/mentor/MentorDashboard';
import Login from "./component/login/login";
import Signup from "./component/login/signup";



class App extends Component {
  render() {
     const history = createHistory();
    return ( 
        <Router history={history}>
          
           <Switch>
           <Route path="/dashboard" component={DashBoard} />
           <Route path="/mentor" component={MentorDashboard}/>
           <Route path="/login" component={Login}/>
           <Route path="/signup" component={Signup}/>
           </Switch>
            


        
        </Router>      
    );
  }
}

export default App;
