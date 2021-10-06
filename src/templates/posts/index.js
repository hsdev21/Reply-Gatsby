import React from "react"
import { graphql ***REMOVED*** from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import GravityForm from "../../components/gravity-form/gravity-form";
import PageHeader from "../../components/page-header/page-header";
import { Container, Row, Col ***REMOVED*** from "react-bootstrap";
import pageStyles from '../pages/pageStyles.module.scss';
import contentParser from 'gatsby-wpgraphql-inline-images';

const Post = (
***REMOVED***
        data: {
            wpcontent: {
                seo: {
                    schema: {
                        siteUrl,
                        siteName
                    ***REMOVED***
              ***REMOVED***
                post: {
                    seo,
                    title,
                    content,
                    date,
                    author: {
                        node: {
                            authorName
                        ***REMOVED***
                    ***REMOVED***
                ***REMOVED***
            ***REMOVED***
      ***REMOVED***
        pageContext: {
            pluginOptions: {
                wordPressUrl,
                uploadsUrl
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***) => {
    const pageContent = contentParser({ content ***REMOVED***, {wordPressUrl, uploadsUrl***REMOVED***);
    const newDateObject = new Date(Date.parse(date));
    const readableDate = `${newDateObject.toLocaleString('default', {month: 'long'***REMOVED***)***REMOVED*** ${newDateObject.getUTCDate()***REMOVED***, ${newDateObject.getUTCFullYear()***REMOVED***`
    return (
        <Layout>
            <SEO
                seoInfo={ seo ***REMOVED***
                siteUrl={ siteUrl ***REMOVED***
                siteName={ siteName ***REMOVED***
                date={ date ***REMOVED***/>
            <PageHeader pageTitle={ title ***REMOVED***/>
            <Container style={{paddingTop: "50px"***REMOVED******REMOVED***>
                <Row>
                    <Col lg={8***REMOVED*** className={pageStyles.pageContent***REMOVED***>
                        <h2>{title***REMOVED***</h2>
                        <p>{readableDate***REMOVED***</p>
                        <p>By {authorName***REMOVED***</p>
                        <div>{pageContent***REMOVED***</div>
                    </Col>
                    <Col lg={4***REMOVED*** className={pageStyles.sidebar***REMOVED*** >
                        <p>To Request an Appointment</p>
                        <p>Call <a href={'tel:+1-214-739-1706'***REMOVED***>214-739-1706</a></p>
                        <p>or</p>
                        <p>Use Our Easy Online Contact Form</p>
                        <GravityForm/>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
***REMOVED***

export const query = graphql`
  query GetPostQuery($id: ID!) {
  wpcontent {
    seo {
      schema {
        siteUrl
        siteName
      ***REMOVED***
    ***REMOVED***
    post(id: $id) {
      content
      title
      uri
      date
      author {
        node {
            authorName: name
        ***REMOVED***
      ***REMOVED***
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

export default Post
