import React, { Component } from 'react'
import Link from 'gatsby-link'

const Nav = ({data}) => {

  const menuItems = data.contentfulMenu.menu.main;
  const secondaryMenuItems = data.contentfulMenu.menu.secondary;

  const menuList = menuItems ? menuItems.map(item => {

    return (
      <Link key={item.url} to={item.url}>{item.text}</Link>
    )
  }) : [];

  const secondaryMenuList = secondaryMenuItems ? secondaryMenuItems.map(item => {

    if (item.external) {

      return <a target="_blank" key={item.url} href={item.url}>{item.text}</a>
    }

    return (
      <Link key={item.url} to={item.url}>{item.text}</Link>
    )
  }) : [];

  return (
    <div>
      <nav>
        <ul className="nav__list">
          {menuList}
        </ul>
      </nav>
      <nav className="nav--secondary">
        <ul className="nav__list">
          {secondaryMenuList}
        </ul>
      </nav>
    </div>
  )
}


export default Nav;
