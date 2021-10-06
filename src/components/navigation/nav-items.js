import React from "react"
import { Nav, NavDropdown ***REMOVED*** from "react-bootstrap"
import navigationStyles from "./navigation.module.scss"
import scrollTo from "gatsby-plugin-smoothscroll"

const NavItems = ({ navItems ***REMOVED***) => {
  const navList = navItems.map((navItem, i) => {
    if (navItem.children.length) {
      return (
        <NavDropdown
          key={i***REMOVED***
          title={navItem.label***REMOVED***
          id="basic-nav-dropdown"
          className={navigationStyles.navLink***REMOVED***
        >
      ***REMOVED***navItem.children.map((navItemChild, j) => (
            <Nav.Link
              key={`${i***REMOVED***-${j***REMOVED***`***REMOVED***
              to={navItemChild.path***REMOVED***
              className={navigationStyles.navLink***REMOVED***
            >
          ***REMOVED***navItemChild.label***REMOVED***
            </Nav.Link>
          ))***REMOVED***
        </NavDropdown>
      )
    ***REMOVED***
    return (
      <Nav.Link
        key={i***REMOVED***
        to={navItem.path***REMOVED***
        className={navigationStyles.navLink***REMOVED***
        onClick={() => scrollTo(navItem.path)***REMOVED***
      >
    ***REMOVED***navItem.label***REMOVED***
      </Nav.Link>
    )
  ***REMOVED***)

  return <Nav className={"m-auto"***REMOVED***>{navList***REMOVED***</Nav>
***REMOVED***

export default NavItems
