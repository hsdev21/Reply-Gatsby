import React, { useState } from "react"
import { Navbar } from "react-bootstrap"
import NavItems from "./nav-items"
import { GetMenuItems } from "../../hooks/getMenuItems"
import navigationStyles from "./navigation.module.scss"
import "./navigationStyles.scss"

const Navigation = props => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Navbar
      className={navigationStyles.navBar}
      expand={"lg"}
      sticky={"top"}
      {...props}
      expanded={expanded}
      onSelect={() => setExpanded(expanded ? false : "expanded")}
    >
      <Navbar.Toggle
        className={navigationStyles.toggle}
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(expanded ? false : "expanded")}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavItems
          navItems={GetMenuItems().primaryNav}
          setExpanded={setExpanded}
        />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
