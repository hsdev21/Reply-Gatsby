import React from "react"
import { graphql ***REMOVED*** from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHeader from "../../components/page-header/page-header"
import { Container, Row, Col ***REMOVED*** from "react-bootstrap"
import contactStyles from "./contactStyles.module.scss"
import GravityForm from "../../components/gravity-form/gravity-form"

import locationPhoto from "../../images/section-7.jpg"

const PageContact = ({
  data: {
    wpcontent: {
      page: { seo, title, content ***REMOVED***,
  ***REMOVED***
***REMOVED***
  pageContext: {
    pluginOptions: { wordPressUrl, uploadsUrl ***REMOVED***,
***REMOVED***
***REMOVED***) => (
  <Layout title={title***REMOVED***>
    <SEO title={seo.title***REMOVED*** seoInfo={seo***REMOVED*** />
    <PageHeader pageTitle={title***REMOVED*** />
    <Container style={{ paddingTop: "50px" ***REMOVED******REMOVED***>
      <Row>
        <Col lg={12***REMOVED*** className={contactStyles.pageContent***REMOVED***>
          <h2>
            Contact Valley Radiology for leading-edge radiology care near you.
          </h2>
          <p>
            Do you have questions? Give us a call, we’d love to hear from you.
          </p>
          <p>
            To find out more or to schedule an appointment in our main office,
            or a new patient consultation in one of our offices, call us at{" "***REMOVED***
            <a href="tel:+1-910-486-5700">910-486-5700</a>. You can also request
            an appointment using the easy online form on this page.
          </p>
        </Col>
      </Row>
      <Row style={{ marginBottom: "2rem" ***REMOVED******REMOVED***>
        <Col lg={6***REMOVED*** className={contactStyles.pageContent***REMOVED***>
          <img src={locationPhoto***REMOVED*** alt="Valley Radiology location" />
        </Col>
        <Col lg={6***REMOVED*** className={contactStyles.pageContent***REMOVED***>
          <h2 className="text-center" style={{ marginBottom: "25px" ***REMOVED******REMOVED***>
            Get In Touch
          </h2>
          <GravityForm />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export const query = graphql`
  query ContactPageQuery($id: ID!) {
    wpcontent {
      page(id: $id) {
        content
        title
        uri
        seo {
          metaDesc
          metaKeywords
          opengraphAuthor
          opengraphDescription
          opengraphImage {
            altText
            sourceUrl
          ***REMOVED***
          opengraphModifiedTime
          opengraphPublishedTime
          opengraphPublisher
          opengraphSiteName
          opengraphTitle
          opengraphType
          opengraphUrl
          title
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
`

export default PageContact
