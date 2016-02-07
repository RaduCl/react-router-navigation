import React from 'react'
import { Component } from 'react'
import NavBar from '../nav/NavBar'

export default class BasePage extends Component {
  render() {
    const navData = [
      {
        title: "Home",
        href:"/"
      },
      {
        title: "Page One",
        href:"/page-one"
      },
      {
        title: "Page Two",
        href:"/page-two"
      },
      {
        title: "Page Three",
        href:"/page-three"
      }
    ];
    return(
      <div>
        <NavBar navData={navData} />
        {this.props.children}
      </div>
    )
  }
}
