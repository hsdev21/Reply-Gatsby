import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import footerStyles from "./footer.module.scss"
import footerLogo from "../../images/footer-logo.png"
// import { faUnderline } from "@fortawesome/free-solid-svg-icons"

const Footer = () => (
  <footer id="our-location">
    <Container className={`${footerStyles.footerCopyRight}`} fluid>
      <Container>
        <Row className={footerStyles.footerContainer}>
          <Col lg={2}>
            <Col className={`${footerStyles.footerLogo}`}>
              <img
                className={footerStyles.footerLogo}
                src={footerLogo}
                alt="Reply OB/GYN & Fertility logo"
              />
            </Col>
          </Col>
          <Col lg={10}>
            <h2>
              <strong>Schedule your free consultation<br />to learn more <a href="tel:+1-866.407.3010">866.407.3010</a></strong>
            </h2>
            <p className={footerStyles.locationAddress}>
              7535 Carpenter Fire Station Road, Suite 105<br/>
              Cary, NC 27519
            </p>
            <span>
              &copy; {new Date().getFullYear()}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://replyobgyn.com/"
              >
                 Reply OB/GYN &amp; Fertility.
              </a>
              All rights reserved. |{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://healthcaresuccess.com/privacy-policy"
              >
                Privacy Policy
              </a>{" "}
              | Website by Healthcare Success
            </span>
          </Col>
        </Row>
      </Container>
    </Container>
  </footer>
)

export default Footer
