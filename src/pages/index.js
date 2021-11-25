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
import { PopupButton } from "react-calendly"

// Insurance logos
import aetna from "../images/aetna.png"
import blueShield from "../images/blue.png"
import bright from "../images/bright.png"
import cigna from "../images/cigna.png"
import coventry from "../images/coventry.png"
import gateway from "../images/gateway.png"
import humana from "../images/humana.png"
import healthyBlue from "../images/healthy-blue.png"
// import medicaid from "../images/medicaid.jpg"
// import medicare from "../images/medicare.jpg"
import securehorizons from "../images/securehorizons.png"
import tricare from "../images/tricare.png"
import united from "../images/united.png"
import wellpath from "../images/wellpath.png"
import careCredit from "../images/care-credit.png"
// import posterImg from "../images/video_mask.jpg"

// videos
import video1Img from "../images/pamela-story.png"
import video2Img from "../images/liz-story.png"
import video3Img from "../images/felishia-story.png"
import quoteWhite from "../images/quote-white.png"
import quoteGray from "../images/quote-gray.png"
import replyVid from "../videos/reply_video.mp4"

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
                <h1>If you&rsquo;re struggling<br />to have a baby,<br /><span>find HOPE and<br />a new way forward with REPLY</span></h1>

                <div className={homePageStyles.homeForm}>
                  <div className="blue-box">
                    <PopupButton
                      text="Schedule Free Consultation"
                      url="https://calendly.com/rethinkyourfertility/learn-more"
                    />
                  </div>
                  <div className={homePageStyles.cta}>
                    Call Now <a href="tel:+1.866.407.3010">866.407.3010</a>
                  </div>

                  <div className={homePageStyles.cta}>
                    <button
                      to="#schedule"
                      onClick={() => scrollTo("#schedule")}
                    >
                      Contact Me
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className={homePageStyles.callOutContainer}>
          <Container
            className={`text-center ${homePageStyles.callOut}`}
          >Rethink Your Fertility
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
              </h2>
              <p>
                At Reply, we help find the underlying causes that impair your fertility – both the female and male factors – and use Restorative Reproductive Medicine ("RRM") to treat those underlying causes and help you conceive naturally.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className={`video-story bg-1`}>
        <Container>
          <Row>
            <Col
              lg={6}
              className={`quote ${homePageStyles.verticalCenter}`}
              style={{ paddingLeft: "30px" }}
            >
            <img src={quoteWhite} alt="" />
              <p>Not until I found Reply... did I feel confident that I would ever have a child of my own.</p>
            <img src={quoteWhite} alt="" style={{transform: "rotate(180deg)"}} />
            </Col>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <div className="video-wrap embed-responsive embed-responsive-16by9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/0qP3jlKf29E?rel=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid>
        <Container className={homePageStyles.genericSection}>
          <Row>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <Img
                className={`${homePageStyles.homeImg} ${homePageStyles.blueBorder}`}
                fluid={data.section4.childImageSharp.fluid}
                alt="A pregnant woman."
              />
            </Col>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <h2>
                <strong>Our secret</strong> is getting your body healthy &amp;
                ready for pregnancy{" "}
              </h2>
              <p>
                Couples who struggle to get pregnant or suffer from recurrent
                miscarriages often have unresolved health issues left
                undiagnosed or simply ignored.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container id="we-partner" fluid className={homePageStyles.yellowBack}>
        <Container className={homePageStyles.genericSection}>
          <Row>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <h2>
                <strong>We Partner</strong>
                <br /> With You Every Step of The Way
              </h2>
              <p className={homePageStyles.lightBlue}>
                You won&rsquo;t feel alone or in the dark about your options or timeline.
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
              <div className="blue-box">
                <PopupButton
                  text="Schedule Your Free Consultation"
                  url="https://calendly.com/rethinkyourfertility/learn-more"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className={`video-story pos-1 bg-2`}>
        <Container>
          <Row>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <div className="video-wrap embed-responsive embed-responsive-16by9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/d9rq11xPUpc?rel=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </Col>
            <Col
              lg={6}
              className={`quote ${homePageStyles.verticalCenter}`}
              style={{ paddingLeft: "30px" }}
            >
              <img src={quoteGray} alt="" />
              <p>It was the first time that I felt that we were going to work together to figure it out. And that to me was the start of my path that no other doctor had given me.</p>
              <img src={quoteGray} alt="" style={{ transform: "rotate(180deg)" }} />
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
                While assisted reproductive technologies such as IVF are used routinely, they circumvent underlying health problems. Many patients can have their babies naturally when their underlying health problems are identified and treated.
              </p>
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
                Reply Ob/Gyn & Fertility is a leader in the global movement toward restorative reproductive medicine (“RRM”) for women suffering from gynecologic problems and couples suffering from fertility challenges.
              </p>
              <p>
                We collaborate with others committed to improving reproductive medical knowledge and treatment, including the International Institute for Restorative Reproductive Medicine. Our interdisciplinary team brings a wealth of knowledge and passion for RRM care, as well as true compassion for patients and their loved ones.
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

      <Container fluid className={`video-story pos-1 bg-1`}>
        <Container>
          <Row>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <div className="video-wrap embed-responsive embed-responsive-16by9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/AynUIzw0Ofg?rel=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </Col>
            <Col
              lg={6}
              className={`quote ${homePageStyles.verticalCenter}`}
              style={{ paddingLeft: "30px" }}
            >
              <img src={quoteWhite} alt="" />
              <p>A huge part of our journey and success story was uncovering an underlying issue; that made Reply different than anywhere else. And that for us was the game-changer.</p>
              <img src={quoteWhite} alt="" style={{ transform: "rotate(180deg)" }} />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container
        fluid
        className={`${homePageStyles.mobilePaddingTop}`}
        id="affordability"
      >
        <Container className={homePageStyles.genericSection}>
          <Row>
            <Col lg={12} className={homePageStyles.verticalCenter}>
              <h2 className={`text-center`}>
                <strong>We make payments</strong> AS AFFORDABLE AS POSSIBLE
              </h2>
              <p
                className="text-center"
                style={{ maxWidth: "850px", margin: "auto" }}
              >
                We offer a complimentary Learn More Appointment with one of our fertility educators, who can provide more information about our program and our care. Our fertility packages typically combine insurance-reimbursed care for underlying gynecologic conditions along with a program fee for uncovered services. We accept most major insurance and offer payment options through CareCredit.
              </p>
            </Col>
          </Row>
          <div className={`${homePageStyles.insurances}`}>
            <div className={`${homePageStyles.insuranceItem}`}>
              <div><img src={aetna} alt="Aetna insurance logo" /></div>
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <div><img src={blueShield} alt="Blue Shield insurance logo" /></div>
            </div>
            <div className={homePageStyles.insuranceItem}>
              <div><img src={cigna} alt="Cigna insurance logo" /></div>
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <div><img src={humana} alt="Humana insurance logo" /></div>
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <div><img src={healthyBlue} alt="Healthy Blue insurance logo" /></div>
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <div><img src={tricare} alt="Tricare insurance logo" /></div>
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <div><img src={gateway} alt="Gateway insurance logo" /></div>
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <div><img src={coventry} alt="Coventry insurance logo" /></div>
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <div><img src={bright} alt="Bright Health Group insurance logo" /></div>
            </div>
            <div className={homePageStyles.insuranceItem}>
              <div><img src={united} alt="United Healthcare insurance logo" /></div>
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <div><img src={securehorizons} alt="Secure Horizons insurance logo" /></div>
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <div><img src={wellpath} alt="Wellpath insurance logo" /></div>
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <div><img src={careCredit} alt="Care Credit insurance logo" /></div>
            </div>
          </div>
        </Container>
      </Container>


      <Container
        id="treatment-options"
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
                <strong>WE CAN HELP YOU IN-PERSON AND VIA TELEHEALTH,<br />ANYWHERE IN NORTH CAROLINA</strong>
              </h2>
              <p className={homePageStyles.subHeading}>
                Reply offers you two personalized, convenient options based on your needs.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className={`d-flex align-items-stretch`}>
              <div style={{ background: '#ffffff', padding: '2em', 'box-shadow': '0px 3px 6px #00000029' }}>
              <Img
                fluid={data.inpersoncare.childImageSharp.fluid}
                alt="A couple talking with a doctor in person"
              />
              <h2>
                  <strong>in-person care in cary,<br />plus telehealth</strong>
              </h2>
              <h3>
                Meet your Reply team in-person when required and virtually when possible.
              </h3>
              <p className={homePageStyles.mobilePaddingTop}>
                We provide in-person appointments at our beautiful Cary, North Carolina clinic, while most provider, case management, fertility education, and health coaching visits are offered conveniently via telehealth.
              </p>
              </div>
            </Col>
            <Col lg={6} className={`align-items-stretch`}>
            <div style={{ background: '#ffffff', padding: '2em', 'box-shadow': '0px 3px 6px #00000029' }}>
              <Img
                fluid={data.telehealth.childImageSharp.fluid}
                alt="A couple talking with a doctor on a laptop"
              />
              <h2>
                <strong>100% TELEHEALTH<br />(STATEWIDE)</strong>
              </h2>
              <h3>
                Experience Reply's unique offerings from the comfort of your own home.
              </h3>
              <p className={homePageStyles.mobilePaddingTop}>
                We'll work with your local provider for your in-person appointments such as your physical, labs, and ultrasound. At the same time, you meet with us via telehealth for your provider, case management, fertility education, and health coaching visits - all without having to travel.
              </p>
              </div>
            </Col>
          </Row>
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
              className={`${homePageStyles.homeForm} ${homePageStyles.footerForm} footer-form`}
            >
              <div className="blue-box">
                <PopupButton
                  text="Schedule Free Consultation"
                  url="https://calendly.com/rethinkyourfertility/learn-more"
                />
              </div>

              <div className={homePageStyles.cta}>
                Call Now <a href="tel:+1.866.407.3010">866.407.3010</a>
              </div>

              <div className={homePageStyles.smaller}>
                or fill out the form below
              </div>

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
            <Col lg={9}>
              <h2>
                Rethink Your Fertility is a program of Reply OB/GYN & Fertility.
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
    inpersoncare: file(relativePath: { eq: "inpersoncare.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    telehealth: file(relativePath: { eq: "telehealth.png" }) {
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
