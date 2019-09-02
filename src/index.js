import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/root/App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/react-fontawesome/index.es"
import "@fortawesome/fontawesome-svg-core"
import {BrowserRouter} from 'react-router-dom'
import ConfigureStore from './redux/ConfigureStore'
import {Provider} from 'react-redux'
import 'alertifyjs/build/css/alertify.min.css'
const store=ConfigureStore()


ReactDOM.render(<BrowserRouter><Provider store={store}><App/></Provider></BrowserRouter>,document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
