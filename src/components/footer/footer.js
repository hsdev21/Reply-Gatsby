import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import footerStyles from "./footer.module.scss"
import footerLogo from "../../images/footer-logo.png"
// import { faUnderline } from "@fortawesome/free-solid-svg-icons"

const Footer = () => (
  <footer id="our-location">
    {/* <Container className={`${footerStyles.footerTextContainer}`}>
      <Row>
        <Col lg={6} className={`${footerStyles.map} text-center`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d513.6318410486264!2d-78.89745374383008!3d35.82222905666514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acec3ae0f42d3f%3A0x9feb2d6de259ab4c!2s7535%20Carpenter%20Fire%20Station%20Rd%2C%20Cary%2C%20NC%2027519!5e0!3m2!1sen!2sus!4v1632783450560!5m2!1sen!2sus"
            width="100%"
            height="350"
            loading="lazy"
            title="Fayetteville location map"
          ></iframe>
        </Col>
        <Col lg={6} className={footerStyles.textRight}>
          <h2>
            <strong>schedule your free consultation<br/>to learn more</strong>
            <br />
            <a href="tel:+1-866.407.3010">866.407.3010</a>
          </h2>
          <p style={{marginBottom: '0'}}>
            <span className={footerStyles.lightBlue}>Rethink Your Fertility is a program of <a className={footerStyles.lightBlue} style={{textDecoration: 'underline'}} rel="noreferrer" target="_blank" href="https://replyobgyn.com/">Reply OB/GYN &amp; Fertility.</a></span><br/>
          </p>
          <h4>Serving all of North Carolina</h4><br/>
          <h4>Reply Ob/Gyn & Fertility</h4>
          <p>
          7535 Carpenter Fire Station Road, Suite 105<br/>
          Cary, NC  27519
          </p>
        </Col>
      </Row>
    </Container> */}

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
