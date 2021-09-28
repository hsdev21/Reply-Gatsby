import React from "react"
import { Container, Row, Col ***REMOVED*** from "react-bootstrap"
import footerStyles from "./footer.module.scss"
import FooterNav from "./footer-navigaton/footer-navigation"
import footerLogo from "../../images/footer-logo.png"

const Footer = () => (
  <footer>
    <Container className={footerStyles.footerTextContainer***REMOVED***>
      <Row>
        <Col lg={12***REMOVED*** className={`${footerStyles.map***REMOVED*** text-center`***REMOVED***>
          <h3>
            Telephone: <a href="tel:+1-919-230-2100">919-230-2100</a>
          </h3>
          <h3>Fax: 910-486-5950</h3>
          <p>
            7535 Carpenter Fire Station Road, Suite 105
            <br />
            Cary, North Carolina 27519
            <br />
            Monday - Friday: 8am - 5pm
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d513.6318410486264!2d-78.89745374383008!3d35.82222905666514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acec3ae0f42d3f%3A0x9feb2d6de259ab4c!2s7535%20Carpenter%20Fire%20Station%20Rd%2C%20Cary%2C%20NC%2027519!5e0!3m2!1sen!2sus!4v1632783450560!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: "1px solid #C1D72F", maxWidth: "600px" ***REMOVED******REMOVED***
            loading="lazy"
            title="Fayetteville location map"
          ></iframe>
        </Col>
      </Row>
      <Row>
        <Col className={footerStyles.footerNav***REMOVED***>
          <FooterNav />
        </Col>
      </Row>
    </Container>
    <Container className={`${footerStyles.footerCopyRight***REMOVED***`***REMOVED*** fluid>
      <Container>
        <Row className={footerStyles.footerContainer***REMOVED***>
          <Col lg={2***REMOVED***>
            <Col className={`${footerStyles.footerLogo***REMOVED***`***REMOVED***>
              <img
                className={footerStyles.footerLogo***REMOVED***
                src={footerLogo***REMOVED***
                alt="Reply OB/GYN & Fertility logo"
              />
            </Col>
          </Col>
          <Col lg={10***REMOVED*** className="text-right">
            <span>
              &copy; {new Date().getFullYear()***REMOVED*** Reply OB/GYN &amp; Fertility.
              All rights reserved. |{" "***REMOVED***
              <a href="/privacy-policy/">Privacy Policy</a> |{" "***REMOVED***
              <a href="!#">Notice of Non-Discrimination</a> | Website by{" "***REMOVED***
              <a
                href="https://healthcaresuccess.com/"
                target="_blank"
                rel={"noreferrer"***REMOVED***
              >
                Healthcare Success
              </a>
            </span>
          </Col>
        </Row>
      </Container>
    </Container>
  </footer>
)

export default Footer
