import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//import the provider
import { Provider } from 'react-redux';
import Store from './components/store';


ReactDOM.render(
 <Provider store={Store}>
    <App />
 </Provider>,


document.getElementById('root'));
