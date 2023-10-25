import React from 'react';
import ReactDOM from 'react-dom/client';
import {store} from "./redux/store";
import {Provider} from "react-redux"
import App from './App';
import "./index.css"
import axios from "axios"

// axios.defaults.baseURL ="http://localhost:3001"
axios.defaults.baseURL ="https://countries-pi-back-production.up.railway.app/"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App /> 
    </Provider>
  // </React.StrictMode>
);


