import React from "react"
import { graphql ***REMOVED*** from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHeader from "../../components/page-header/page-header";
import {
    Container,
    Row,
    Col
***REMOVED*** from "react-bootstrap";
import pageStyles from '../pages/pageStyles.module.scss';
import contentParser from 'gatsby-wpgraphql-inline-images';

const PageNoSidebar = (
***REMOVED***
      data: {
          wpcontent: {
              page: {
                  seo,
                  title,
                  content
              ***REMOVED***
          ***REMOVED***
    ***REMOVED***
      pageContext: {
          pluginOptions: {
              wordPressUrl,
              uploadsUrl
          ***REMOVED***
      ***REMOVED***
    ***REMOVED***) => (
        <Layout title={ title ***REMOVED***>
            <SEO title={ seo.title ***REMOVED*** seoInfo={ seo ***REMOVED*** />
            <PageHeader pageTitle={ title ***REMOVED***/>
            <Container style={{paddingTop: "50px"***REMOVED******REMOVED***>
                <Row>
                    <Col className={pageStyles.pageContent***REMOVED***>
                        <div>{contentParser({ content ***REMOVED***, {wordPressUrl, uploadsUrl***REMOVED***)***REMOVED***</div>
                    </Col>
                </Row>
            </Container>
        </Layout>
)

export const query = graphql`
  query NoSidebarQuery($id: ID!) {
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

export default PageNoSidebar;
