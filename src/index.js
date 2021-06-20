import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Airtable from 'airtable';
import axios from 'axios';


new Airtable({apiKey:'keyogwD6vVcXyASVC'}).base('app9zfPCWF8CLuGyG');

//base endpoint to call with each request
axios.defaults.baseURL =   'https://api.airtable.com/v0/BASE_ID/map/';

//content type to send with all POST requests 
axios.defaults.headers.post['Content-Type'] = 'application/json';

//authenticate to the base with the API key 
axios.defaults.headers['Authorization'] = 'Bearer keyogwD6vVcXyASVC';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
