import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
  /** BrowserRouter gives the app all needed for routing */
  
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>

  ,
  document.getElementById('root')
);


