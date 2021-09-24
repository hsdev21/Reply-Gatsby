import React from 'react';
import { Nav, NavDropdown ***REMOVED*** from "react-bootstrap";
import { Link ***REMOVED*** from "gatsby";
import navigationStyles from './navigation.module.scss';

const NavItems = ({navItems***REMOVED***)  => {
    const navList = navItems.map((navItem, i) => {
        if (navItem.children.length) {
           return (
               <NavDropdown key={i***REMOVED*** title={navItem.label***REMOVED*** id="basic-nav-dropdown" className={navigationStyles.navLink***REMOVED***>
               ***REMOVED***navItem.children.map((navItemChild, j) => (
                       <NavDropdown.Item
                           key={`${i***REMOVED***-${j***REMOVED***`***REMOVED***
                           as={Link***REMOVED***
                           to={navItemChild.path***REMOVED***
                           className={navigationStyles.navLink***REMOVED***>
                       ***REMOVED***navItemChild.label***REMOVED***
                       </NavDropdown.Item>
                   ))***REMOVED***
               </NavDropdown>
           )
        ***REMOVED***
        return (
            <Nav.Link
                key={i***REMOVED***
                as={Link***REMOVED***
                to={navItem.path***REMOVED***
                className={navigationStyles.navLink***REMOVED***>
            ***REMOVED***navItem.label***REMOVED***
            </Nav.Link>
        )
    ***REMOVED***)

    return (
        <Nav className={'m-auto'***REMOVED***>
        ***REMOVED***navList***REMOVED***
        </Nav>
    )
***REMOVED***

export default NavItems;
