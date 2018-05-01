/*!
 * 路由模块
*/ 

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from '@/pages/home';
import NotFoundPage from '@/pages/notFound';

// 各部分模块在此汇总
export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
					<Route path="/404" component={NotFoundPage} />
          <Route render={() => <Redirect to="/404" />} />
        </Switch> 
      </Router>
    );
  }
}