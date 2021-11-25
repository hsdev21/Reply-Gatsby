import React from "react"
import { Link } from "gatsby"
import Navigation from "../navigation/navigation"
import headerStyles from "./header.module.scss"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { PopupButton } from "react-calendly"
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
          <div className="container nav-wrapper" style={{ padding: 0 }}>
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
              <div className={`tagline`}>Serving The Triangle and all of North Carolina</div>
              <Navigation className="desktopNav" />
              <div className={headerStyles.headerRight}>
                <PopupButton
                  className={headerStyles.headerBtn}
                  text="GET STARTED NOW"
                  url="https://calendly.com/rethinkyourfertility/learn-more"
                />
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
