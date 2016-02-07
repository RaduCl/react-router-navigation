import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router'

export default class NavItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      hover: false
    }
  }

  mouseOver(e){
    this.setState({hover: true})
  }
  mouseOut(e){
    this.setState({hover: false})
  }
  render(){
    const link = this.props.linkData;
    return(
      <li
        onMouseOver={this.mouseOver.bind(this)}
        onMouseOut={this.mouseOut.bind(this)}
        className={this.state.hover ? "active" : ''}>
          <Link to={link.href}>{link.title}</Link>
      </li>
    )
  }
}
