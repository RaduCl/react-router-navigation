import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router'

export default class ClassName extends Component {
  render() {
    return(
      <div>
        <h1>Home Page</h1>
        <ul>
          <li><Link to="/page-one">Page One</Link></li>
          <li><Link to="/page-two">Page Two</Link></li>
          <li><Link to="/page-three">Page Three</Link></li>
        </ul>
      </div>
    )
  }
}
