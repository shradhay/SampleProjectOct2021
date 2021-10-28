import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import 'react-toastify/dist/ReactToastify.css';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from "react-redux"
import coursesReducer from './redux/reducers/coursesReducer';
const store=createStore(coursesReducer,composeWithDevTools())
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  
    <App />
 
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);


