import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {createLogger, applyMiddleware} from 'redux-logger';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons'; 
import {searchRobots} from './reducers';

const logger = createLoger();
const store = createStore(searchRobots) applyMiddleware(logger))
ReactDOM.render(
<Provider store= {store}>
<App />
</Provider>, document.getElementById('root'));
reportWebVitals();

