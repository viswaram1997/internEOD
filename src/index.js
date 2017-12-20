import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./Routes";
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import 'semantic-ui-css/semantic.min.css';
import store from "./Store/store";





ReactDOM.render( <Provider store={store}><AppRouter /></Provider>, document.getElementById('root'));
registerServiceWorker();
