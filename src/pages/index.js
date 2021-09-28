import React from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Button ***REMOVED*** from "react-bootstrap"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import homePageStyles from "./index.module.scss"
import GravityForm from "../components/gravity-form/gravity-form"
import SEO from "../components/seo"
import { GetHomePageMeta ***REMOVED*** from "../hooks/getHomePageMeta"
import { graphql ***REMOVED*** from "gatsby"
import Slider from "../components/slider/slider"

import aetna from "../images/aetna.jpg"
import blueShield from "../images/blue.jpg"
import cigna from "../images/cigna.jpg"
import humana from "../images/humana.jpg"
import medicaid from "../images/medicaid.jpg"
import united from "../images/united.jpg"

import "./index.scss"

const IndexPage = ({ data ***REMOVED***) => {
  const {
    seo: {
      schema: { siteUrl, siteName ***REMOVED***,
  ***REMOVED***
    pages: { nodes ***REMOVED***,
  ***REMOVED*** = GetHomePageMeta()
  const { seo, date ***REMOVED*** = nodes[0]

  return (
    <Layout>
      <SEO seoInfo={seo***REMOVED*** siteUrl={siteUrl***REMOVED*** siteName={siteName***REMOVED*** date={date***REMOVED*** />
      <BackgroundImage
        fluid={data.section1.childImageSharp.fluid***REMOVED***
        className={`${homePageStyles.section1***REMOVED*** ${homePageStyles.genericSection***REMOVED***`***REMOVED***
        style={{
          backgroundPosition: "top",
        ***REMOVED******REMOVED***
      >
        <Container>
          <Row className={homePageStyles.row***REMOVED***>
            <Col lg={6***REMOVED*** className={`${homePageStyles.text***REMOVED***`***REMOVED***></Col>
            <Col lg={6***REMOVED*** className={homePageStyles.heroForm***REMOVED***>
              <p>
                <small>
                  Schedule Your Consultation
                  <br />
                  <span className={homePageStyles.cta***REMOVED***>
                    Call <a href="+1-919-230-2100">919-230-2100</a>
                  </span>
                  <br />
                  <span className={homePageStyles.smaller***REMOVED***>
                    or fill out the form below
                  </span>
                </small>
              </p>
              <div className={`${homePageStyles.gravityForm***REMOVED*** gravityForm`***REMOVED***>
                <GravityForm className={homePageStyles.gravityForm***REMOVED*** />
              </div>
            </Col>
          </Row>
        </Container>
      </BackgroundImage>
      <Container
        fluid
        className={`${homePageStyles.section2***REMOVED*** ${homePageStyles.yellowBack***REMOVED***`***REMOVED***
      >
        <Container className={homePageStyles.genericSection***REMOVED***>
          <Row className={homePageStyles.mobileReverse***REMOVED***>
            <Col
              lg={12***REMOVED***
              className={`${homePageStyles.verticalCenter***REMOVED*** text-center mb-4`***REMOVED***
            >
              <h2>
                <strong>Our Approach</strong> Is Different
              </h2>
              <p className={homePageStyles.darkestBlue***REMOVED***>
                ... and so is how we partner with you.
              </p>
            </Col>
            <Col
              lg={2***REMOVED***
              className={`${homePageStyles.verticalCenter***REMOVED*** text-center`***REMOVED***
            >
              <p>Photo here</p>
              <h3>Title Here</h3>
              <p>
                a multi-step treatment plan that maximizes your chances of
                natural conception and a healthy, happy baby
              </p>
            </Col>
            <Col
              lg={2***REMOVED***
              className={`${homePageStyles.verticalCenter***REMOVED*** text-center`***REMOVED***
            >
              <p>Photo here</p>
              <h3>Title Here</h3>
              <p>
                a multi-step treatment plan that maximizes your chances of
                natural conception and a healthy, happy baby
              </p>
            </Col>
            <Col
              lg={2***REMOVED***
              className={`${homePageStyles.verticalCenter***REMOVED*** text-center`***REMOVED***
            >
              <p>Photo here</p>
              <h3>Title Here</h3>
              <p>
                a multi-step treatment plan that maximizes your chances of
                natural conception and a healthy, happy baby
              </p>
            </Col>
            <Col
              lg={2***REMOVED***
              className={`${homePageStyles.verticalCenter***REMOVED*** text-center`***REMOVED***
            >
              <p>Photo here</p>
              <h3>Title Here</h3>
              <p>
                a multi-step treatment plan that maximizes your chances of
                natural conception and a healthy, happy baby
              </p>
            </Col>
            <Col
              lg={2***REMOVED***
              className={`${homePageStyles.verticalCenter***REMOVED*** text-center`***REMOVED***
            >
              <p>Photo here</p>
              <h3>Title Here</h3>
              <p>
                a multi-step treatment plan that maximizes your chances of
                natural conception and a healthy, happy baby
              </p>
            </Col>
            <Col
              lg={2***REMOVED***
              className={`${homePageStyles.verticalCenter***REMOVED*** text-center`***REMOVED***
            >
              <p>Photo here</p>
              <h3>Title Here</h3>
              <p>
                a multi-step treatment plan that maximizes your chances of
                natural conception and a healthy, happy baby
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid>
        <Container className={homePageStyles.genericSection***REMOVED***>
          <Row>
            <Col lg={6***REMOVED*** className={homePageStyles.verticalCenter***REMOVED***>
              <h2>
                <strong>Our secret</strong> IS GETTING YOUR BODY HEALTHY &amp;
                ready for pregnancy{" "***REMOVED***
              </h2>
              <p>
                Couples who struggle to get pregnant or suffer from recurrent
                miscarriages often have unresolved health issues left
                undiagnosed or simply ignored.
              </p>
            </Col>
            <Col lg={6***REMOVED*** className={homePageStyles.verticalCenter***REMOVED***>
              <Img
                className={`${homePageStyles.homeImg***REMOVED*** ${homePageStyles.blueBorder***REMOVED***`***REMOVED***
                fluid={data.section3.childImageSharp.fluid***REMOVED***
                alt="A couple sitting together."
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className={homePageStyles.yellowBack***REMOVED***>
        <Container className={homePageStyles.genericSection***REMOVED***>
          <Row className={homePageStyles.mobileReverse***REMOVED***>
            <Col
              lg={12***REMOVED***
              className={`${homePageStyles.verticalCenter***REMOVED*** text-center mb-5`***REMOVED***
            >
              <h2>Fertility Challenges</h2>
              <p>
                Some of the fertility challenges our team helps patients
                overcome include:
              </p>
            </Col>
          </Row>
          <Row className={homePageStyles.mobileReverse***REMOVED***>
            <Col lg={4***REMOVED*** className={`${homePageStyles.verticalCenter***REMOVED***`***REMOVED***>
              <p>Image here</p>
              <h3>Title Here</h3>
              <p>
                Most people vastly underestimate the many ways their lifestyle
                can impair their fertility. Common fertility inhibitors include
                stress, nutritional deficiencies, medications, obesity, smoking,
                alcohol, over-exercise, and more. We’ll help you uncover and
                resolve hidden lifestyle barriers to fertility.
              </p>
            </Col>
            <Col lg={4***REMOVED*** className={`${homePageStyles.verticalCenter***REMOVED***`***REMOVED***>
              <p>Image here</p>
              <h3>Title Here</h3>
              <p>
                Most people vastly underestimate the many ways their lifestyle
                can impair their fertility. Common fertility inhibitors include
                stress, nutritional deficiencies, medications, obesity, smoking,
                alcohol, over-exercise, and more. We’ll help you uncover and
                resolve hidden lifestyle barriers to fertility.
              </p>
            </Col>
            <Col lg={4***REMOVED*** className={`${homePageStyles.verticalCenter***REMOVED***`***REMOVED***>
              <p>Image here</p>
              <h3>Title Here</h3>
              <p>
                Most people vastly underestimate the many ways their lifestyle
                can impair their fertility. Common fertility inhibitors include
                stress, nutritional deficiencies, medications, obesity, smoking,
                alcohol, over-exercise, and more. We’ll help you uncover and
                resolve hidden lifestyle barriers to fertility.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid>
        <Container
          className={`${homePageStyles.genericSection***REMOVED*** ${homePageStyles.testimonialSlider***REMOVED***`***REMOVED***
        >
          <div className={"text-center"***REMOVED***>
            <Slider>
              <p>
                <em>
                  "Dr. Meka was Exceptionally kind. He calmly explained the
                  procedure to be performed on my next visit. Answered all of my
                  questions and reassured me that all should go well. I felt
                  well cared for. And I must add that the receptionist at the
                  entrance was very kind and polite as well. She took my
                  temperature, summoned the elevator for me, and wished me a
                  safe and enjoyable weekend!"
                </em>
                <br />
                <span className={homePageStyles.author***REMOVED***>M. Williams</span>
              </p>
              <p>
                <em>
                  "My foot was turning purple from poor circulation. They looked
                  at it and set an appointment for the next day for an
                  ultrasound. As I was walking out the door, they called out to
                  see if I wanted to do the ultrasound now. That was huge in my
                  mind. Then they set an appointment for an angiogram the next
                  morning. I have only great thoughts on how I was treated. I
                  would absolutely recommend them."
                </em>
                <br />
                <span className={homePageStyles.author***REMOVED***>D. Romstadt</span>
              </p>
              <p>
                <em>
                  "To Dr. Meka and all members of this dynamic team of Medical
                  staff and all Kind, Patient, Caring, Compassionate Healthcare
                  providers. Thank you for being super Sheroes and Heroes! Bless
                  you!"
                </em>
                <br />
                <span className={homePageStyles.author***REMOVED***>Ms. M. Williams</span>
              </p>
              <p>
                <em>
                  "The best &amp; most caring medical professionals & staff
                  EVER!! It always made me feel like I was the only patient they
                  had! I only wish I had met Dr. Meka a lot sooner than I did!
                  But so glad I finally did."
                </em>
                <br />
                <span className={homePageStyles.author***REMOVED***>D. Denham</span>
              </p>
            </Slider>
          </div>
        </Container>
      </Container>
      <Container fluid>
        <Container className={homePageStyles.genericSection***REMOVED***>
          <Row>
            <Col lg={6***REMOVED*** className={homePageStyles.verticalCenter***REMOVED***>
              <h2>
                <strong>We Partner</strong> With You Every Step of The Way
              </h2>
              <p className="lightBlue">
                You won’t feel alone or in the dark about your options or
                timeline.
              </p>
              <p>
                From your complimentary Welcome Appointment to your fertility
                evaluation and all the way through pregnancy and the postpartum
                period, we will be right there with you. Your journey starts
                with a clear roadmap along with a dedicated fertility navigator
                to guide the way. Your team also includes nurse practitioners,
                nurse midwives, physicians, and physician assistants, as well as
                our fertility educators, health coaches, registered dieticians,
                and other complementary therapists.
              </p>
            </Col>
            <Col
              lg={6***REMOVED***
              className={homePageStyles.verticalCenter***REMOVED***
              style={{ marginBottom: "20px" ***REMOVED******REMOVED***
            >
              <Img
                className={homePageStyles.homeImg***REMOVED***
                fluid={data.section5.childImageSharp.fluid***REMOVED***
                alt="Doctors Murali Meka and Bryan Swilley."
                style={{ marginBottom: "5px" ***REMOVED******REMOVED***
              />
              <p>
                <Button
                  variant={"primary"***REMOVED***
                  className={homePageStyles.secondaryBtn***REMOVED***
                  href="/our-specialists/"
                >
                  Schedule Your Welcome Appointment Today
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className={homePageStyles.yellowBack***REMOVED***>
        <Container className={homePageStyles.genericSection***REMOVED***>
          <Row>
            <Col
              lg={6***REMOVED***
              className={homePageStyles.verticalCenter***REMOVED***
              style={{ marginBottom: "20px" ***REMOVED******REMOVED***
            >
              <Img
                className={homePageStyles.homeImg***REMOVED***
                fluid={data.section6.childImageSharp.fluid***REMOVED***
                alt="A woman receiving a sonogram."
                style={{ marginBottom: "5px" ***REMOVED******REMOVED***
              />
            </Col>
            <Col lg={6***REMOVED*** className={homePageStyles.verticalCenter***REMOVED***>
              <h2>
                <strong>What If You Could Have a Baby</strong>, Without
                Resorting To IVF?
              </h2>
              <p>
                While assisted reproductive technologies like in vitro
                fertilization (IVF) are the conventional go-to services, most
                patients can have their babies naturally without IVF.
              </p>
              <p className="lightBlue">
                At Reply, we have helped couples who have:
              </p>
              <ul>
                <li>Been trying for more than a year</li>
                <li>Suffered multiple miscarriages</li>
                <li>Been told they waited until they were “too old”</li>
                <li>Previously failed with IVF</li>
                <li>Been diagnosed as high-risk or “infertile”</li>
                <li>Nearly given up hope</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid>
        <Container className={homePageStyles.genericSection***REMOVED***>
          <Row>
            <Col lg={6***REMOVED*** className={homePageStyles.verticalCenter***REMOVED***>
              <h2>
                <strong>A leader</strong>
                <br />
                In Restorative Reproductive Medicine
              </h2>
              <p className="lightBlue">
                Reply Ob/Gyn &amp; Fertility is a leader in the global movement
                toward restorative reproductive medicine (“RRM”) for women
                suffering from gynecologic problems and couples suffering from
                fertility challenges.
              </p>
              <p>
                We collaborate with others committed to improving reproductive
                medical knowledge and treatment, including the International
                Institute for Restorative Reproductive Medicine. Our
                interdisciplinary team brings a wealth of knowledge and passion
                for RRM care as well as true compassion for patients and their
                loved ones.
              </p>
            </Col>
            <Col
              lg={6***REMOVED***
              className={homePageStyles.verticalCenter***REMOVED***
              style={{ marginBottom: "20px" ***REMOVED******REMOVED***
            >
              <Img
                className={homePageStyles.homeImg***REMOVED***
                fluid={data.section7.childImageSharp.fluid***REMOVED***
                alt="A team of people."
                style={{ marginBottom: "5px" ***REMOVED******REMOVED***
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className={homePageStyles.yellowBack***REMOVED***>
        <Container className={homePageStyles.genericSection***REMOVED***>
          <Row>
            <Col lg={12***REMOVED*** className={homePageStyles.verticalCenter***REMOVED***>
              <h3 className={`text-center`***REMOVED***>
                <strong>We make payments</strong> as affordable as possible
              </h3>
              <p className="text-center">
                We offer a complimentary Welcome Appointment with one of our
                fertility educators who can provide more information about our
                program and our care. Our fertility packages typically combine
                insurance- reimbursed care for underlying gynecologic conditions
                along with a program fee for uncovered services. We accept most
                major insurance and offer payment options through CareCredit.
              </p>
            </Col>
          </Row>
          <div className={`${homePageStyles.insurances***REMOVED***`***REMOVED***>
            <div className={`${homePageStyles.insuranceItem***REMOVED***`***REMOVED***>
              <img src={aetna***REMOVED*** alt="Aetna insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem***REMOVED***`***REMOVED***>
              <img src={blueShield***REMOVED*** alt="Blue Shield insurance logo" />
            </div>
            <div className={homePageStyles.insuranceItem***REMOVED***>
              <img src={cigna***REMOVED*** alt="Cigna insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem***REMOVED***`***REMOVED***>
              <img src={humana***REMOVED*** alt="Humana insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem***REMOVED***`***REMOVED***>
              <img src={medicaid***REMOVED*** alt="Medicaid insurance logo" />
            </div>
            <div className={homePageStyles.insuranceItem***REMOVED***>
              <img src={united***REMOVED*** alt="United Healthcare insurance logo" />
            </div>
          </div>
          <Row>
            <Col lg={12***REMOVED*** className={`text-center`***REMOVED***>
              <p>
                <Button
                  variant={"primary"***REMOVED***
                  className={homePageStyles.mainBtn***REMOVED***
                  href="/insurance/"
                >
                  Learn More
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <BackgroundImage
        fluid={data.contactSection.childImageSharp.fluid***REMOVED***
        className={`${homePageStyles.contactSection***REMOVED***`***REMOVED***
        alt="A technician with a patient under a machine."
      >
        <Container>
          <Row>
            <Col
              lg={{ span: 6, offset: 3 ***REMOVED******REMOVED***
              className={homePageStyles.formContainer***REMOVED***
            >
              <h2>
                Contact Us
                <br />
                We're Ready to Help.
              </h2>
              <p className="text-center">
            ***REMOVED***" "***REMOVED***
                Call <a href="tel:+1-919-230-2100">919-230-2100</a>
                <br />
                <small>Or Use Our Easy Online Form.</small>
              </p>
              <div className="gravityForm">
                <GravityForm />
              </div>
            </Col>
          </Row>
        </Container>
      </BackgroundImage>
    </Layout>
  )
***REMOVED***

export const query = graphql`
  query {
    section1: file(relativePath: { eq: "hero.jpg" ***REMOVED***) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    section3: file(relativePath: { eq: "section-3.jpg" ***REMOVED***) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    section5: file(relativePath: { eq: "section-5.jpg" ***REMOVED***) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    section6: file(relativePath: { eq: "section-6.jpg" ***REMOVED***) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    section7: file(relativePath: { eq: "section-7.jpg" ***REMOVED***) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    aetna: file(relativePath: { eq: "aetna.jpg" ***REMOVED***) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    blue: file(relativePath: { eq: "blue.jpg" ***REMOVED***) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    contactSection: file(relativePath: { eq: "contact-us-bg.jpg" ***REMOVED***) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    sliderImage: file(relativePath: { eq: "slider.jpg" ***REMOVED***) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
`

export default IndexPage
