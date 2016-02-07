import React from 'react';
import { Component } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

import BasePage from './pages/BasePage';
import HomePage from './pages/HomePage';
import Page1 from './pages/PageOne'
import Page2 from './pages/PageTwo'
import Page3 from './pages/PageThree'

export default class Routes extends Component {


  render(){
    const History = createHistory({
      queryKey: false
    })
    return(
      <Router history={History}>
        <Route path='/' component={BasePage}>
          <IndexRoute component={HomePage} />
          <Route path="/page-one" component={Page1} />
          <Route path="/page-two" component={Page2} />
          <Route path="/page-three" component={Page3} />
        </Route>
      </Router>
    )
  }
}
