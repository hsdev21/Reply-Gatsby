/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header/header"
import "./layout.css"
import Footer from "./footer/footer"
import BackToTop from "./backToTop"

const Layout = ({ children ***REMOVED***) => (
  <>
    <Header />
    <main>{children***REMOVED***</main>
    <Footer />
    <BackToTop showBelow={250***REMOVED*** />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
***REMOVED***

export default Layout
