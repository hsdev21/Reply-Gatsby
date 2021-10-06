import React, { useState ***REMOVED*** from "react"
import { Navbar ***REMOVED*** from "react-bootstrap"
import NavItems from "./nav-items"
import { GetMenuItems ***REMOVED*** from "../../hooks/getMenuItems"
import navigationStyles from "./navigation.module.scss"
import "./navigationStyles.scss"

const Navigation = props => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Navbar
      className={navigationStyles.navBar***REMOVED***
      expand={"lg"***REMOVED***
      sticky={"top"***REMOVED***
  ***REMOVED***...props***REMOVED***
      expanded={expanded***REMOVED***
      onSelect={() => setExpanded(expanded ? false : "expanded")***REMOVED***
    >
      <Navbar.Toggle
        className={navigationStyles.toggle***REMOVED***
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(expanded ? false : "expanded")***REMOVED***
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavItems
          navItems={GetMenuItems().primaryNav***REMOVED***
          setExpanded={setExpanded***REMOVED***
        />
      </Navbar.Collapse>
    </Navbar>
  )
***REMOVED***

export default Navigation
