import React from "react"
import { Link ***REMOVED*** from "gatsby"
import { Button ***REMOVED*** from "react-bootstrap"
import Navigation from "../navigation/navigation"
import headerStyles from "./header.module.scss"
import { StaticQuery, graphql ***REMOVED*** from "gatsby"
import Img from "gatsby-image"

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
                      width: "267px",
                    ***REMOVED******REMOVED***
                    alt="Valley Radiology logo"
                  />
                </Link>
              </div>
              <div className={headerStyles.headerRight***REMOVED***>
                <span>
                  Call{" "***REMOVED***
                  <a className="invoca" href="tel:910-486-5700">
                    <strong>910-486-5700</strong>
                  </a>
                  <br />
                  <small>
                    <em>Serving Fayetteville, Angier, and surrounding areas</em>
                  </small>
                </span>
                <Button
                  variant={"primary"***REMOVED***
                  as={Link***REMOVED***
                  className={headerStyles.headerBtn***REMOVED***
                  to={"/contact/"***REMOVED***
                >
                  Book Online
                </Button>
              </div>
            </div>
          </div>
          <Navigation />
        </>
      )***REMOVED***
    />
  )
***REMOVED***

export default Header
