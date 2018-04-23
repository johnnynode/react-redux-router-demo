import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // 通过 react-redux 来实现store和ui组件的连接
import registerServiceWorker from './services/registerServiceWorker';
import AppRouter from '@/router';
import Store from '@/store';
import '@/assets/styles/base.css';

ReactDOM.render(
  <Provider store={Store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
