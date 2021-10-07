import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import footerStyles from "./footer.module.scss"
import footerLogo from "../../images/footer-logo.png"

const Footer = () => (
  <footer>
    <Container className={footerStyles.footerTextContainer} id="our-location">
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
            <strong>Book Your Learn More Appointment</strong>
            <br />
            <a href="tel:+1-919-443-6000">919-443-6000</a>
          </h2>
          <p className={footerStyles.lightBlue}>
            7535 Carpenter Fire Station Road, Suite 105
            <br />
            Cary, North Carolina 27519
          </p>
          <h4>Clinic Hours</h4>
          <p>
            Monday – Thursday 8 a.m – 5 p.m
            <br /> Friday 8 a.m. – 12 p.m.
          </p>
          <h4>Book Your Appointment</h4>
          <a className={footerStyles.black} href="tel:+1-919-443-6000">
            919-443-6000
          </a>
        </Col>
      </Row>
    </Container>
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
              &copy; {new Date().getFullYear()} Reply OB/GYN &amp; Fertility.
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
