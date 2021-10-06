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
// import Slider from "../components/slider/slider"

// Insurance logos
import aetna from "../images/aetna.jpg"
import blueShield from "../images/blue.jpg"
import cigna from "../images/cigna.jpg"
import humana from "../images/humana.jpg"
import healthyBlue from "../images/healthy-blue.jpg"
import medicaid from "../images/medicaid.jpg"
import medicare from "../images/medicare.jpg"
import tricare from "../images/tricare.jpg"
import united from "../images/united.jpg"
import optum from "../images/optum.jpg"
import wellcare from "../images/wellcare.jpg"
import wellpath from "../images/wellpath.jpg"
import careCredit from "../images/care-credit.jpg"

// Section 2 icons
import listen from "../images/listen.png"
import diagnose from "../images/diagnose.png"
import empower from "../images/empower.png"
import help from "../images/help.png"
import create from "../images/create.png"
import partner from "../images/partner.png"

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
            <Col lg={6***REMOVED*** className={`${homePageStyles.text***REMOVED***`***REMOVED***>
              <h1>Rethink Your Fertility</h1>
            </Col>
            <Col lg={6***REMOVED*** className={homePageStyles.homeForm***REMOVED***>
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
      <Container fluid className={homePageStyles.callOutContainer***REMOVED***>
        <Container
          className={`text-center text-white ${homePageStyles.callOut***REMOVED***`***REMOVED***
        >
          If You’re Struggling to Have a Baby,
          <br /> Find Hope and a New Way Forward with REPLY
        </Container>
      </Container>
      <Container
        fluid
        id={`our-approach`***REMOVED***
        className={homePageStyles.ourApproach***REMOVED***
      >
        <Container className={homePageStyles.genericSection***REMOVED***>
          <Row>
            <Col lg={6***REMOVED*** className={homePageStyles.verticalCenter***REMOVED***>
              <Img
                className={`${homePageStyles.homeImg***REMOVED*** ${homePageStyles.blueBorder***REMOVED***`***REMOVED***
                fluid={data.section2.childImageSharp.fluid***REMOVED***
                alt="A couple with a baby."
              />
            </Col>
            <Col lg={6***REMOVED*** className={homePageStyles.verticalCenter***REMOVED***>
              <h2>
                <strong>Our Restorative Approach</strong>{" "***REMOVED***
                <span style={{ color: "#46A5E3" ***REMOVED******REMOVED***>to Fertility</span>
              </h2>
              <p>
                At Reply, we’ll help find the root causes that impair your
                fertility – both the female and male factors – and then use
                restorative reproductive medicine to treat the underlying causes
                and improve your health to help you conceive naturally.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container
        fluid
        className={`${homePageStyles.section2***REMOVED*** ${homePageStyles.yellowBack***REMOVED***`***REMOVED***
      >
        <Container className={homePageStyles.genericSection***REMOVED***>
          <Row>
            <Col
              lg={12***REMOVED***
              className={`${homePageStyles.verticalCenter***REMOVED*** text-center mb-4`***REMOVED***
            >
              <h2>
                <strong>Our Approach</strong> Is Different
              </h2>
              <p style={{ color: "#3459A5" ***REMOVED******REMOVED***>
                ... and so is how we partner with you.
              </p>
            </Col>
            <Col lg={2***REMOVED*** className={`text-center`***REMOVED***>
              <img alt="listen icon" src={listen***REMOVED*** />
              <h3>Listen</h3>
              <p>
                to you and gain a complete understanding of your unique health
              </p>
            </Col>
            <Col
              lg={2***REMOVED***
              className={`${homePageStyles.approachIcons***REMOVED*** text-center`***REMOVED***
            >
              <img alt="diagnose icon" src={diagnose***REMOVED*** />
              <h3>Diagnose</h3>
              <p>
                underlying causes and hidden contributing factors of your
                condition
              </p>
            </Col>
            <Col lg={2***REMOVED*** className={`text-center`***REMOVED***>
              <img alt="empower icon" src={empower***REMOVED*** />
              <h3>Empower</h3>
              <p>
                you with knowledge of your body and how to participate in your
                own care, including education on fertility awareness cycle
                tracking
              </p>
            </Col>
            <Col lg={2***REMOVED*** className={` text-center`***REMOVED***>
              <img alt="help icon" src={help***REMOVED*** />
              <h3>Help</h3>
              <p>
                you optimize your overall health, including essential lifestyle
                factors
              </p>
            </Col>
            <Col lg={2***REMOVED*** className={`text-center`***REMOVED***>
              <img alt="create icon" src={create***REMOVED*** />
              <h3>Create</h3>
              <p>
                a multi-step treatment plan that maximizes your chances of
                natural conception and a healthy, happy baby
              </p>
            </Col>
            <Col lg={2***REMOVED*** className={`text-center`***REMOVED***>
              <img alt="partner icon" src={partner***REMOVED*** />
              <h3>Partner</h3>
              <p>with you every step of the way!</p>
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
                fluid={data.section4.childImageSharp.fluid***REMOVED***
                alt="A pregnant woman."
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container
        fluid
        className={`${homePageStyles.yellowBack***REMOVED*** ${homePageStyles.section4***REMOVED***`***REMOVED***
      >
        <Container className={homePageStyles.genericSection***REMOVED***>
          <Row className={homePageStyles.mobileReverse***REMOVED***>
            <Col
              lg={12***REMOVED***
              className={`${homePageStyles.verticalCenter***REMOVED*** text-center mb-4`***REMOVED***
            >
              <h2>
                <strong>Fertility</strong> Challenges:
              </h2>
              <p className={homePageStyles.subHeading***REMOVED***>
                Some of the fertility challenges our team helps patients
                overcome include:
              </p>
            </Col>
          </Row>
          <Row className={homePageStyles.mobileReverse***REMOVED***>
            <Col lg={4***REMOVED***>
              <Img
                fluid={data.lifestyle.childImageSharp.fluid***REMOVED***
                alt="A person eating from a bowl."
              />
              <h3>
                <strong>Lifestyle Issues</strong>
              </h3>
              <p>
                Most people vastly underestimate the many ways their lifestyle
                can impair their fertility. Common fertility inhibitors include
                stress, nutritional deficiencies, medications, obesity, smoking,
                alcohol, over-exercise, and more. We’ll help you uncover and
                resolve hidden lifestyle barriers to fertility.
              </p>
            </Col>
            <Col lg={4***REMOVED***>
              <Img
                fluid={data.hormone.childImageSharp.fluid***REMOVED***
                alt="A woman looking pensive."
              />
              <h3>
                <strong>Hormone Imbalances</strong>
              </h3>
              <p>
                A leading cause of fertility challenges, hormone imbalances can
                disrupt ovulation, impede conception, and threaten pregnancy.
                Solutions include treatments that restore thyroid function,
                normalize hormone levels, and promote healthy ovulation.
              </p>
            </Col>
            <Col lg={4***REMOVED***>
              <Img
                fluid={data.medicalConditions.childImageSharp.fluid***REMOVED***
                alt="Two woman sitting at a desk."
              />
              <h3>
                <strong>Medical Conditions</strong>
              </h3>
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
  ***REMOVED***/* <Container fluid>
        <Container
          className={`${homePageStyles.genericSection***REMOVED*** ${homePageStyles.testimonialSlider***REMOVED***`***REMOVED***
        >
          <div className={"text-center"***REMOVED***>
            <Slider>
              <p>
                <em>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Proin luctus scelerisque est, sagittis facilisis elit pulvinar
                  ac. Vivamus vehicula enim non felis feugiat porta. Aenean
                  venenatis blandit nibh, nec sollicitudin enim congue in.
                  Aliquam posuere dolor felis, eget laoreet metus rutrum
                  gravida. Maecenas in bibendum justo. Donec sit amet fermentum
                  erat."
                </em>
                <br />
                <span className={homePageStyles.author***REMOVED***>M. Williams</span>
              </p>
              <p>
                <em>
                  "Pellentesque tristique eros mauris, semper ullamcorper nulla
                  faucibus eget. Nam dapibus rutrum est vitae interdum. In
                  sagittis sapien nec orci porttitor dignissim. Ut eu rhoncus
                  libero, suscipit molestie turpis."
                </em>
                <br />
                <span className={homePageStyles.author***REMOVED***>D. Romstadt</span>
              </p>
              <p>
                <em>
                  "Donec enim quam, mollis imperdiet consequat quis, vulputate a
                  velit. Sed ultricies nisl sed auctor scelerisque. Mauris
                  rutrum lorem quis fermentum luctus. Duis vehicula rutrum
                  mollis. Aenean molestie dapibus lorem, posuere gravida massa
                  sodales ac. Aliquam vitae quam ante. Fusce molestie id dolor
                  vitae sollicitudin. Nam varius venenatis volutpat. In maximus
                  posuere tortor dictum rhoncus. Donec nunc arcu, interdum et
                  turpis ac, maximus scelerisque urna."
                </em>
                <br />
                <span className={homePageStyles.author***REMOVED***>Ms. M. Williams</span>
              </p>
              <p>
                <em>
                  "Fusce varius pharetra nunc a eleifend. Pellentesque tristique
                  eros mauris, semper ullamcorper nulla faucibus eget. Nam
                  dapibus rutrum est vitae interdum. In sagittis sapien nec orci
                  porttitor dignissim. Ut eu rhoncus libero, suscipit molestie
                  turpis. Nulla sit amet turpis aliquet, scelerisque elit non,
                  ullamcorper magna. Quisque nulla tortor, tincidunt nec massa
                  eu, facilisis fringilla erat."
                </em>
                <br />
                <span className={homePageStyles.author***REMOVED***>D. Denham</span>
              </p>
            </Slider>
          </div>
        </Container>
      </Container> */***REMOVED***
      <Container fluid className={homePageStyles.section6***REMOVED***>
        <Container className={homePageStyles.genericSection***REMOVED***>
          <Row>
            <Col lg={6***REMOVED*** className={homePageStyles.verticalCenter***REMOVED***>
              <h2>
                <strong>We Partner</strong>
                <br /> With You Every Step of The Way
              </h2>
              <p className={homePageStyles.lightBlue***REMOVED***>
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
                alt="A woman receiving a sonogram."
                style={{ marginBottom: "35px" ***REMOVED******REMOVED***
              />
              <p>
                <Button
                  variant={"primary"***REMOVED***
                  className={homePageStyles.secondaryBtn***REMOVED***
                  href="/contact/"
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
                alt="A woman holding a baby."
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
              <p
                style={{
                  color: "#003176",
                  fontFamily: "Avenir Bold, sans-serif",
                ***REMOVED******REMOVED***
              >
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
      <Container fluid id="our-team">
        <Container className={homePageStyles.genericSection***REMOVED***>
          <Row>
            <Col lg={6***REMOVED*** className={homePageStyles.verticalCenter***REMOVED***>
              <h2>
                <strong>A leader</strong>
                <br />
                In Restorative Reproductive Medicine
              </h2>
              <p className={homePageStyles.lightBlue***REMOVED***>
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
      <Container fluid className={homePageStyles.yellowBack***REMOVED*** id="affordability">
        <Container className={homePageStyles.genericSection***REMOVED***>
          <Row>
            <Col lg={12***REMOVED*** className={homePageStyles.verticalCenter***REMOVED***>
              <h2 className={`text-center`***REMOVED***>
                <strong>We make our care</strong> as affordable as possible
              </h2>
              <p
                className="text-center"
                style={{ maxWidth: "850px", margin: "auto" ***REMOVED******REMOVED***
              >
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
              <img src={healthyBlue***REMOVED*** alt="Healthy Blue insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem***REMOVED***`***REMOVED***>
              <img src={medicaid***REMOVED*** alt="Medicaid insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem***REMOVED***`***REMOVED***>
              <img src={medicare***REMOVED*** alt="Medicare insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem***REMOVED***`***REMOVED***>
              <img src={tricare***REMOVED*** alt="Tricare insurance logo" />
            </div>
            <div className={homePageStyles.insuranceItem***REMOVED***>
              <img src={united***REMOVED*** alt="United Healthcare insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem***REMOVED***`***REMOVED***>
              <img src={optum***REMOVED*** alt="Optum insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem***REMOVED***`***REMOVED***>
              <img src={wellcare***REMOVED*** alt="Wellcare insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem***REMOVED***`***REMOVED***>
              <img src={wellpath***REMOVED*** alt="Wellpath insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem***REMOVED***`***REMOVED***>
              <img src={healthyBlue***REMOVED*** alt="Healthy Blue insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem***REMOVED***`***REMOVED***>
              <img src={medicaid***REMOVED*** alt="Medicaid insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem***REMOVED***`***REMOVED***>
              <img src={careCredit***REMOVED*** alt="Care Credit insurance logo" />
            </div>
          </div>
        </Container>
      </Container>
      <BackgroundImage
        fluid={data.contactSection.childImageSharp.fluid***REMOVED***
        className={`${homePageStyles.contactSection***REMOVED***`***REMOVED***
        alt="The Reply Fertility building."
        id="schedule"
      >
        <Container>
          <Row>
            <Col
              lg={{ span: 3, offset: 9 ***REMOVED******REMOVED***
              className={homePageStyles.homeForm***REMOVED***
            >
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
      <Container fluid>
        <Container>
          <Row className={homePageStyles.contactBottom***REMOVED***>
            <Col lg={12***REMOVED***>
              <h2>
                <strong>Reimagine Fertility</strong>{" "***REMOVED***
                <span style={{ color: "#46A5E3" ***REMOVED******REMOVED***>with Reply</span>
              </h2>
            </Col>
          </Row>
        </Container>
      </Container>
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
    section2: file(relativePath: { eq: "section-2.jpg" ***REMOVED***) {
      childImageSharp {
        fluid {
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
    section4: file(relativePath: { eq: "section-4.jpg" ***REMOVED***) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    lifestyle: file(relativePath: { eq: "lifestyle.jpg" ***REMOVED***) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    hormone: file(relativePath: { eq: "hormone.jpg" ***REMOVED***) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    medicalConditions: file(relativePath: { eq: "medical-conditions.jpg" ***REMOVED***) {
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
    contactSection: file(relativePath: { eq: "contact-us-bg.jpg" ***REMOVED***) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
`

export default IndexPage
