import React, { Component } from 'react'
import Link from 'gatsby-link'

const Nav = ({data}) => {

  const menuItems = data.contentfulMenu.menu.items;

  const menuList = menuItems.map(item => {

    return (
      <Link key={item} to={`/${item}`}>{item}</Link>
    )
  })

  return (
    <nav>
      <ul className="nav__list">
        {menuList}
      </ul>
    </nav>
  )
}


export default Nav;
