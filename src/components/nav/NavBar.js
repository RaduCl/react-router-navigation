import React from 'react';
import { Component } from 'react'
import NavItem from './NavItem'
import { Link } from 'react-router'

export default class NavBar extends Component {

  createLinkItems() {
    // let navLinks = [
    //   {
    //     title: "test1",
    //     href:"#"
    //   },
    //   {
    //     title: "test2",
    //     href:"#"
    //   },
    //   {
    //     title: "test3",
    //     href:"#"
    //   }
    // ];
    return this.props.navData.map( link => <NavItem key={link.title} linkData={link} /> )
  }

  render(){
    console.log("createLinkItems: ",this.createLinkItems())
    return(
      <div>
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">ProductBrand</Link>
          </div>
          <div className="collapse navbar-collapse" id="nav-collapse">
            <ul className="nav navbar-nav">
              {this.createLinkItems()}
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
