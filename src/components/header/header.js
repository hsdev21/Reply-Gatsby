import React from "react"
import { Link ***REMOVED*** from "gatsby"
import Navigation from "../navigation/navigation"
import headerStyles from "./header.module.scss"
import { StaticQuery, graphql ***REMOVED*** from "gatsby"
import Img from "gatsby-image"
import scrollTo from "gatsby-plugin-smoothscroll"
import "./header.scss"

const Header = ({ data ***REMOVED***) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          logo: file(relativePath: { eq: "logo.png" ***REMOVED***) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_noBase64
              ***REMOVED***
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
      `***REMOVED***
      render={data => (
        <>
          <div className="container" style={{ padding: 0 ***REMOVED******REMOVED***>
            <div className={headerStyles.headerWrap***REMOVED***>
              <div className="logo-wrap">
                <Link className="brand" to="/">
                  <Img
                    fluid={data.logo.childImageSharp.fluid***REMOVED***
                    style={{
                      marginBottom: 0,
                      width: "154px",
                    ***REMOVED******REMOVED***
                    alt="Reply OB/GYN &amp; Fertility logo"
                  />
                </Link>
              </div>
              <Navigation className="desktopNav" />
              <div className={headerStyles.headerRight***REMOVED***>
                <button
                  variant={"primary"***REMOVED***
                  as={Link***REMOVED***
                  className={headerStyles.headerBtn***REMOVED***
                  to={"#schedule"***REMOVED***
                  onClick={() => scrollTo("#schedule")***REMOVED***
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <Navigation className="mobileNav" />
        </>
      )***REMOVED***
    />
  )
***REMOVED***

export default Header
