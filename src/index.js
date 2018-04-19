import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // 通过 react-redux 来实现store和ui组件的连接
import {BrowserRouter as Router} from 'react-router-dom'; // 路由模块
import registerServiceWorker from './Services/registerServiceWorker';
import App from './Components/App';
import Store from './Store';

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
