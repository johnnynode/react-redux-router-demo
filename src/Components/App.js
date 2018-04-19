/*!
 * 此模块汇集所有子模块
*/ 

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from '../Pages/Home';

// 各部分模块在此汇总并配置路由
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>
      </div>
    );
  }
}

export default App;