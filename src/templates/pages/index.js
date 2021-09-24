import React from "react"
import { graphql ***REMOVED*** from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import GravityForm from "../../components/gravity-form/gravity-form"
import PageHeader from "../../components/page-header/page-header"
import { Container, Row, Col ***REMOVED*** from "react-bootstrap"
import pageStyles from "./pageStyles.module.scss"
import contentParser from "gatsby-wpgraphql-inline-images"

import "./pageStyles.scss"

const Page = ({
  data: {
    wpcontent: {
      seo: {
        schema: { siteUrl, siteName ***REMOVED***,
    ***REMOVED***
      page: { seo, title, content, date ***REMOVED***,
  ***REMOVED***
***REMOVED***
  pageContext: {
    pluginOptions: { wordPressUrl, uploadsUrl ***REMOVED***,
***REMOVED***
***REMOVED***) => {
  const pageContent = contentParser({ content ***REMOVED***, { wordPressUrl, uploadsUrl ***REMOVED***)
  return (
    <Layout>
      <SEO seoInfo={seo***REMOVED*** siteUrl={siteUrl***REMOVED*** siteName={siteName***REMOVED*** date={date***REMOVED*** />
      <PageHeader pageTitle={title***REMOVED*** />
      <Container style={{ paddingTop: "50px" ***REMOVED******REMOVED***>
        <Row>
          <Col lg={8***REMOVED*** className={pageStyles.pageContent***REMOVED***>
            <div>{pageContent***REMOVED***</div>
          </Col>
          <Col lg={4***REMOVED*** className={`${pageStyles.sidebar***REMOVED*** sidebar`***REMOVED***>
            <p>To Request an Appointment</p>
            <p>
              <span>
                call <a href={"tel:+1-910-486-5700"***REMOVED***>910-486-5700</a>
              </span>
            </p>
            <p style={{ marginBottom: "20px" ***REMOVED******REMOVED***>
              <span>or Use Our Online Contact Form</span>
            </p>
            <GravityForm />
            <small>
              <em>
                *We’ll contact you shortly to confirm an appointment time
                convenient to your schedule.
              </em>
            </small>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
***REMOVED***

export const query = graphql`
  query GetPagesQuery($id: ID!) {
    wpcontent {
      seo {
        schema {
          siteUrl
          siteName
        ***REMOVED***
      ***REMOVED***
      page(id: $id) {
        content
        title
        uri
        date
        seo {
          metaDesc
          metaKeywords
          opengraphAuthor
          opengraphDescription
          opengraphImage {
            altText
            sourceUrl
            mediaDetails {
              height
              width
            ***REMOVED***
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

export default Page
