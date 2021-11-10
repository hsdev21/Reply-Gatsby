import React from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Button } from "react-bootstrap"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import homePageStyles from "./index.module.scss"
import GravityForm from "../components/gravity-form/gravity-form"
import SEO from "../components/seo"
import { GetHomePageMeta } from "../hooks/getHomePageMeta"
import { graphql } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
// import Slider from "../components/slider/slider"

// Insurance logos
import aetna from "../images/aetna.jpg"
import blueShield from "../images/blue.jpg"
import bright from "../images/bright.jpg"
import cigna from "../images/cigna.jpg"
import coventry from "../images/coventry.jpg"
import gateway from "../images/gateway.jpg"
import humana from "../images/humana.jpg"
import healthyBlue from "../images/healthy-blue.jpg"
import medicaid from "../images/medicaid.jpg"
import medicare from "../images/medicare.jpg"
import securehorizons from "../images/securehorizons.jpg"
import tricare from "../images/tricare.jpg"
import united from "../images/united.jpg"
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

const IndexPage = ({ data }) => {
  const {
    seo: {
      schema: { siteUrl, siteName },
    },
    pages: { nodes },
  } = GetHomePageMeta()
  const { seo, date } = nodes[0]

  const heroSources = [
    {
      ...data.mobileHero.childImageSharp.fluid,
      media: `(max-width: 992px)`,
    },
    {
      ...data.section1.childImageSharp.fluid,
      media: `(min-width: 992px)`,
    },
  ]

  return (
    <Layout>
      <SEO seoInfo={seo} siteUrl={siteUrl} siteName={siteName} date={date} />
      <BackgroundImage
        fluid={heroSources}
        className={`${homePageStyles.section1} ${homePageStyles.genericSection}`}
        style={{
          backgroundPosition: "top",
        }}
      >
        <Container>
          <Row className={homePageStyles.row}>
            <Col lg={6}></Col>
            <Col lg={6}>
              <div className={`${homePageStyles.text}`}>
                <h1>Rethink Your Fertility</h1>

                <div className={homePageStyles.homeForm}>
                  <div className="blue-box">
                    Learn More – Schedule Your Free Consultation Now
                  </div>
                  <p>
                    <small>
                      <span className={homePageStyles.smaller}>
                        or
                      </span>
                      <br />
                      <span className={homePageStyles.cta}>
                        Call <a href="tel:+1.866.407.3010">866.407.3010</a>
                      </span>
                      <br />
                      <span className={homePageStyles.smaller}>
                        or fill out the form below
                      </span>
                    </small>
                  </p>
                  <div className={`${homePageStyles.gravityForm} gravityForm`}>
                    <GravityForm className={homePageStyles.gravityForm} />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className={homePageStyles.callOutContainer}>
          <Container
            className={`text-center text-white ${homePageStyles.callOut}`}
          >
            If you’re struggling to have a baby,
            <br /> find HOPE and a new way forward with REPLY
          </Container>
        </Container>
      </BackgroundImage>

      <Container
        fluid
        id={`our-approach`}
        className={`${homePageStyles.ourApproach} ${homePageStyles.mobilePaddingTop}`}
      >
        <Container className={homePageStyles.genericSection}>
          <Row>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <Img
                className={`${homePageStyles.homeImg} ${homePageStyles.blueBorder}`}
                fluid={data.section2.childImageSharp.fluid}
                alt="A couple with a baby."
              />
            </Col>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <h2>
                <strong>Our Restorative Approach</strong>
                <br />
                <span>to Fertility</span>
              </h2>
              <p>
                At Reply, we’ll help find the underlying causes that impair your
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
        className={`${homePageStyles.section2} ${homePageStyles.yellowBack}`}
      >
        <Container className={homePageStyles.genericSection}>
          <Row>
            <Col
              lg={12}
              className={`${homePageStyles.verticalCenter} text-center mb-4`}
            >
              <h2>
                <strong>Our Approach</strong> Is Different
              </h2>
              <p style={{ color: "#3459A5" }}>
                ... and so is how we partner with you.
              </p>
            </Col>
            <Col lg={2} className={`text-center`}>
              <img alt="listen icon" src={listen} />
              <h3>Listen</h3>
              <p>
                to you and gain a complete understanding of your unique health
              </p>
            </Col>
            <Col
              lg={2}
              className={`${homePageStyles.approachIcons} text-center`}
            >
              <img alt="diagnose icon" src={diagnose} />
              <h3>Diagnose</h3>
              <p>
                underlying causes and hidden contributing factors of your
                condition
              </p>
            </Col>
            <Col lg={2} className={`text-center`}>
              <img alt="empower icon" src={empower} />
              <h3>Empower</h3>
              <p>
                you with knowledge of your body and how to participate in your
                own care, including education on fertility awareness cycle
                tracking
              </p>
            </Col>
            <Col lg={2} className={` text-center`}>
              <img alt="help icon" src={help} />
              <h3>Help</h3>
              <p>
                you optimize your overall health, including essential lifestyle
                factors
              </p>
            </Col>
            <Col lg={2} className={`text-center`}>
              <img alt="create icon" src={create} />
              <h3>Create</h3>
              <p>
                a multi-step treatment plan that maximizes your chances of
                natural conception and a healthy, happy baby
              </p>
            </Col>
            <Col lg={2} className={`text-center`}>
              <img alt="partner icon" src={partner} />
              <h3>Partner</h3>
              <p>with you every step of the way!</p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid style={{ background: "#D4D8E6" }}>
        <Container className={homePageStyles.genericSection}>
          <Row>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className={`embed-responsive-item`}
                  src="https://www.youtube.com/embed/0qP3jlKf29E?rel=0"
                  allowfullscreen
                ></iframe>
              </div>
            </Col>
            <Col
              lg={6}
              className={homePageStyles.verticalCenter}
              style={{ paddingLeft: "30px" }}
            >
              <h2 className={homePageStyles.paddingTop}>
                <strong>Pamela's Story</strong>
              </h2>
              <p style={{ color: "#003176", fontSize: "20px" }}>
                <em>
                  "Not until I found Reply... did I feel confident that I would
                  ever have a child of my own."
                </em>
              </p>
              <p>
                  Watch to learn how Reply’s “Finding and Fixing” Program helped
                  Pamela address her PCOS, conceive, and have a happy and
                  healthy pregnancy.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid>
        <Container className={homePageStyles.genericSection}>
          <Row>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <h2>
                <strong>Our secret</strong> IS GETTING YOUR BODY HEALTHY &amp;
                ready for pregnancy{" "}
              </h2>
              <p>
                Couples who struggle to get pregnant or suffer from recurrent
                miscarriages often have unresolved health issues left
                undiagnosed or simply ignored.
              </p>
            </Col>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <Img
                className={`${homePageStyles.homeImg} ${homePageStyles.blueBorder}`}
                fluid={data.section4.childImageSharp.fluid}
                alt="A pregnant woman."
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container
        fluid
        className={`${homePageStyles.yellowBack} ${homePageStyles.section4}`}
      >
        <Container
          className={`${homePageStyles.genericSection} ${homePageStyles.fertilityChallenges}`}
        >
          <Row className={homePageStyles.mobileReverse}>
            <Col
              lg={12}
              className={`${homePageStyles.verticalCenter} text-center mb-4`}
            >
              <h2>
                <strong>Fertility</strong> Challenges
              </h2>
              <p className={homePageStyles.subHeading}>
                Some of the fertility challenges our team helps patients
                overcome include:
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <h3 className={homePageStyles.desktopHide}>
                <strong>Lifestyle Issues</strong>
              </h3>
              <Img
                fluid={data.lifestyle.childImageSharp.fluid}
                alt="A person eating from a bowl."
              />
              <h3 className={homePageStyles.mobileHide}>
                <strong>Lifestyle Issues</strong>
              </h3>
              <p className={homePageStyles.mobilePaddingTop}>
                Most people vastly underestimate the many ways their lifestyle
                can impair their fertility. Common fertility inhibitors include
                stress, nutritional deficiencies, medications, obesity, smoking,
                alcohol, over-exercise, and more. We’ll help you uncover and
                resolve hidden lifestyle barriers to fertility.
              </p>
            </Col>
            <Col lg={4}>
              <h3 className={homePageStyles.desktopHide}>
                <strong>Hormone Imbalances</strong>
              </h3>
              <Img
                fluid={data.hormone.childImageSharp.fluid}
                alt="A woman looking pensive."
              />
              <h3 className={homePageStyles.mobileHide}>
                <strong>Hormone Imbalances</strong>
              </h3>
              <p className={homePageStyles.mobilePaddingTop}>
                A leading cause of fertility challenges, hormone imbalances can
                disrupt ovulation, impede conception, and threaten pregnancy.
                Solutions include treatments that restore thyroid function,
                normalize hormone levels, and promote healthy ovulation.
              </p>
            </Col>
            <Col lg={4}>
              <h3 className={homePageStyles.desktopHide}>
                <strong>Medical Conditions</strong>
              </h3>
              <Img
                fluid={data.medicalConditions.childImageSharp.fluid}
                alt="Two woman sitting at a desk."
              />
              <h3 className={homePageStyles.mobileHide}>
                <strong>Medical Conditions</strong>
              </h3>
              <p className={homePageStyles.mobilePaddingTop}>
                Other medical disorders that can threaten fertility include
                endometriosis, uterine or cervical abnormalities, ovarian
                dysfunction, polycystic ovary syndrome (PCOS), damaged fallopian
                tubes, fibroids, scarring, cancer treatment, or low sperm count.
                Our expert team uses a finding and fixing approach to create a
                customized treatment plan for each couple.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Container fluid>
        <Container
          className={`${homePageStyles.genericSection} ${homePageStyles.testimonialSlider}`}
        >
          <div className={"text-center"}>
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
                <span className={homePageStyles.author}>M. Williams</span>
              </p>
              <p>
                <em>
                  "Pellentesque tristique eros mauris, semper ullamcorper nulla
                  faucibus eget. Nam dapibus rutrum est vitae interdum. In
                  sagittis sapien nec orci porttitor dignissim. Ut eu rhoncus
                  libero, suscipit molestie turpis."
                </em>
                <br />
                <span className={homePageStyles.author}>D. Romstadt</span>
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
                <span className={homePageStyles.author}>Ms. M. Williams</span>
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
                <span className={homePageStyles.author}>D. Denham</span>
              </p>
            </Slider>
          </div>
        </Container>
      </Container> */}
      <Container fluid className={homePageStyles.section6}>
        <Container className={homePageStyles.genericSection}>
          <Row>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <h2>
                <strong>We Partner</strong>
                <br /> With You Every Step of The Way
              </h2>
              <p className={homePageStyles.lightBlue}>
                You won’t feel alone or in the dark about your options or
                timeline.
              </p>
              <p>
                From your complimentary Learn More Appointment to your fertility
                evaluation and all the way through pregnancy and the postpartum
                period, we will be right there with you. Your journey starts
                with a clear roadmap along with a dedicated fertility case
                manager to guide the way. Your team also includes nurse
                practitioners, nurse midwives, ob/gyn and family medicine
                physicians, as well as our fertility educators, health coaches,
                and other complementary therapists.
              </p>
            </Col>
            <Col
              lg={6}
              className={homePageStyles.verticalCenter}
              style={{ marginBottom: "20px" }}
            >
              <Img
                className={homePageStyles.homeImg}
                fluid={data.section5.childImageSharp.fluid}
                alt="A woman receiving a sonogram."
                style={{ marginBottom: "35px" }}
              />
              <p>
                <Button
                  variant={"primary"}
                  className={homePageStyles.secondaryBtn}
                  onClick={() => {
                    scrollTo("#schedule")
                  }}
                >
                  Schedule Your Complimentary Learn More Appointment Today
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className={homePageStyles.yellowBack}>
        <Container className={homePageStyles.genericSection}>
          <Row>
            <Col
              lg={6}
              className={homePageStyles.verticalCenter}
              style={{ marginBottom: "20px" }}
            >
              <Img
                className={homePageStyles.homeImg}
                fluid={data.section6.childImageSharp.fluid}
                alt="A woman holding a baby."
                style={{ marginBottom: "5px" }}
              />
            </Col>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <h2>
                <strong>What If You Could Have a Baby</strong> Without Resorting
                To IVF?
              </h2>
              <p>
                While assisted reproductive technologies like in vitro
                fertilization (IVF) are the conventional go-to services, many
                patients can have their babies naturally without IVF.
              </p>
              <p
                style={{
                  color: "#003176",
                  fontFamily: "Avenir Bold, sans-serif",
                }}
              >
                At Reply, we have helped couples who have:
              </p>
              <ul>
                <li>Been trying for more than a year</li>
                <li>Suffered multiple miscarriages</li>
                <li>Been told they waited until they were “too old”</li>
                <li>Previously failed with IVF/IUI</li>
                <li>Been diagnosed as high-risk or “infertile”</li>
                <li>Nearly given up hope</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container
        fluid
        id="our-team"
        className={homePageStyles.mobilePaddingTop}
      >
        <Container className={homePageStyles.genericSection}>
          <Row>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <h2>
                <strong>A leader</strong>
                <br />
                In Restorative Reproductive Medicine
              </h2>
              <p className={homePageStyles.lightBlue}>
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
              lg={6}
              className={homePageStyles.verticalCenter}
              style={{ marginBottom: "20px" }}
            >
              <Img
                className={homePageStyles.homeImg}
                fluid={data.section7.childImageSharp.fluid}
                alt="A team of people."
                style={{ marginBottom: "5px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container
        fluid
        className={`${homePageStyles.yellowBack} ${homePageStyles.mobilePaddingTop}`}
        id="affordability"
      >
        <Container className={homePageStyles.genericSection}>
          <Row>
            <Col lg={12} className={homePageStyles.verticalCenter}>
              <h2 className={`text-center`}>
                <strong>We make our care</strong> as affordable as possible
              </h2>
              <p
                className="text-center"
                style={{ maxWidth: "850px", margin: "auto" }}
              >
                We offer a complimentary Learn More Appointment with one of our
                fertility educators, who can provide more information about our
                program and our care. Our fertility packages typically combine
                insurance-reimbursed care for underlying gynecologic conditions
                along with a program fee for uncovered services. We accept most
                major insurance and offer payment options through CareCredit.
              </p>
            </Col>
          </Row>
          <div className={`${homePageStyles.insurances}`}>
            <div className={`${homePageStyles.insuranceItem}`}>
              <img src={aetna} alt="Aetna insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <img src={blueShield} alt="Blue Shield insurance logo" />
            </div>
            <div className={homePageStyles.insuranceItem}>
              <img src={cigna} alt="Cigna insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <img src={humana} alt="Humana insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <img src={healthyBlue} alt="Healthy Blue insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <img src={medicaid} alt="Medicaid insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <img src={medicare} alt="Medicare insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <img src={tricare} alt="Tricare insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <img src={gateway} alt="Gateway insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <img src={coventry} alt="Coventry insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <img src={bright} alt="Bright Health Group insurance logo" />
            </div>
            <div className={homePageStyles.insuranceItem}>
              <img src={united} alt="United Healthcare insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <img src={securehorizons} alt="Secure Horizons insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <img src={wellpath} alt="Wellpath insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <img src={careCredit} alt="Care Credit insurance logo" />
            </div>
          </div>
        </Container>
      </Container>
      <BackgroundImage
        fluid={data.contactSection.childImageSharp.fluid}
        className={`${homePageStyles.contactSection}`}
        alt="The Reply Fertility building."
        id="schedule"
      >
        <Container>
          <Row>
            <Col
              lg={{ span: 3, offset: 9 }}
              className={`${homePageStyles.homeForm} ${homePageStyles.footerForm}`}
            >
              <div className="blue-box">
              Learn More – Schedule Your Free Consultation Now
              </div>
              <p>
                <small>
                  <span className={homePageStyles.smaller}>
                    or 
                  </span>
                  <br />
                  <span className={homePageStyles.cta}>
                    Call <a href="tel:+1.866.407.3010">866.407.3010</a>
                  </span>
                  <br />
                  <span className={homePageStyles.smaller}>
                    or fill out the form below
                  </span>
                </small>
              </p>
              <div className={`${homePageStyles.gravityForm} gravityForm`}>
                <GravityForm className={homePageStyles.gravityForm} />
              </div>
            </Col>
          </Row>
        </Container>
      </BackgroundImage>
      <Container fluid>
        <Container>
          <Row className={homePageStyles.contactBottom}>
            <Col lg={12}>
              <h2>
                <strong>Reimagine Fertility</strong> with Reply
              </h2>
            </Col>
          </Row>
        </Container>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    section1: file(relativePath: { eq: "new-hero.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mobileHero: file(relativePath: { eq: "hero-mobile-new.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    section2: file(relativePath: { eq: "section-2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    section3: file(relativePath: { eq: "section-3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    section4: file(relativePath: { eq: "puzzle.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    lifestyle: file(relativePath: { eq: "lifestyle.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    hormone: file(relativePath: { eq: "hormone.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    medicalConditions: file(relativePath: { eq: "medical-conditions.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    section5: file(relativePath: { eq: "section-5.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    section6: file(relativePath: { eq: "section-6.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    section7: file(relativePath: { eq: "section-7.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    contactSection: file(relativePath: { eq: "contact-us-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default IndexPage
