import React from 'react';
import { Link ***REMOVED*** from "gatsby";
import { GetMenuItems ***REMOVED*** from "../../../hooks/getMenuItems";
import footerNavStyles from './footer-navigation.module.scss';

const FooterNav = () => {
    const footerNavLinks = GetMenuItems().footerNav;
    const footerNav = footerNavLinks.map((navItem, i) => (
            [
                <Link className={footerNavStyles.navItem***REMOVED*** key={i***REMOVED*** to={navItem.path***REMOVED***>{navItem.label***REMOVED***</Link>
            ]
    ));
    return (
        <>
        ***REMOVED***footerNav***REMOVED***
        </>
    )
***REMOVED***

export default FooterNav;
