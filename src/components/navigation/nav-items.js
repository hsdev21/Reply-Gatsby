import React from "react"
import { Nav, NavDropdown } from "react-bootstrap"
import navigationStyles from "./navigation.module.scss"
import scrollTo from "gatsby-plugin-smoothscroll"

const NavItems = ({ navItems, setExpanded }) => {
  const navList = navItems.map((navItem, i) => {
    if (navItem.children.length) {
      return (
        <NavDropdown
          key={i}
          title={navItem.label}
          id="basic-nav-dropdown"
          className={navigationStyles.navLink}
        >
          {navItem.children.map((navItemChild, j) => (
            <Nav.Link
              key={`${i}-${j}`}
              to={navItemChild.path}
              className={navigationStyles.navLink}
            >
              {navItemChild.label}
            </Nav.Link>
          ))}
        </NavDropdown>
      )
    }
    return (
      <Nav.Link
        key={i}
        to={navItem.path}
        className={navigationStyles.navLink}
        onClick={() => {
          scrollTo(navItem.path, "start")
          setTimeout(() => setExpanded(false), 100)
        }}
      >
        {navItem.label}
      </Nav.Link>
    )
  })

  return <Nav className={"m-auto"}>{navList}</Nav>
}

export default NavItems
