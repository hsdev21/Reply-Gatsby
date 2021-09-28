import React from "react"
import { Navbar ***REMOVED*** from "react-bootstrap"
import NavItems from "./nav-items"
import { GetMenuItems ***REMOVED*** from "../../hooks/getMenuItems"
import navigationStyles from "./navigation.module.scss"
import "./navigationStyles.scss"

const Navigation = props => (
  <Navbar
    className={navigationStyles.navBar***REMOVED***
    expand={"lg"***REMOVED***
    sticky={"top"***REMOVED***
***REMOVED***...props***REMOVED***
  >
    <Navbar.Toggle
      className={navigationStyles.toggle***REMOVED***
      aria-controls="basic-navbar-nav"
    />
    <Navbar.Collapse id="basic-navbar-nav">
      <NavItems navItems={GetMenuItems().primaryNav***REMOVED*** />
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation
