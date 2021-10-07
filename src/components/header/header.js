import React from "react"
import { Link } from "gatsby"
import Navigation from "../navigation/navigation"
import headerStyles from "./header.module.scss"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import scrollTo from "gatsby-plugin-smoothscroll"
import "./header.scss"

const Header = ({ data }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          logo: file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <div className="container" style={{ padding: 0 }}>
            <div className={headerStyles.headerWrap}>
              <div className="logo-wrap">
                <Link className="brand" to="/">
                  <Img
                    fluid={data.logo.childImageSharp.fluid}
                    style={{
                      marginBottom: 0,
                      width: "154px",
                    }}
                    alt="Reply OB/GYN &amp; Fertility logo"
                  />
                </Link>
              </div>
              <Navigation className="desktopNav" />
              <div className={headerStyles.headerRight}>
                <button
                  variant={"primary"}
                  as={Link}
                  className={headerStyles.headerBtn}
                  to="#schedule"
                  onClick={() => scrollTo("#schedule")}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <Navigation className="mobileNav" />
        </>
      )}
    />
  )
}

export default Header
