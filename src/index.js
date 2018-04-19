import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import registerServiceWorker from './Services/registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom'; // 路由模块

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


registerServiceWorker();
