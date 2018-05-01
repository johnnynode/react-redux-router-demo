/*!
 * 路由模块
*/ 

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '@/components/navBar';
import HomePage from '@/pages/home';
import ListPage from '@/pages/list';
import DetailPage from '@/pages/detail';
import AboutPage from '@/pages/about';

import NotFoundPage from '@/pages/notFound';

// 各部分模块在此汇总
export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* 通用导航条 */}
          <NavBar />
          {/* 各个路由 */}
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/list" component={ListPage}/>
            <Route exact path="/detail" component={DetailPage}/>
            <Route exact path="/about" component={AboutPage}/>
            <Route path="/404" component={NotFoundPage} />
            <Route render={() => <Redirect to="/404" />} />
          </Switch> 
        </div>
      </Router>
    );
  }
}