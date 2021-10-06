/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet ***REMOVED*** from "react-helmet"

function SEO({ lang, meta, seoInfo, siteUrl, siteName, date ***REMOVED***) {
  const openGraphImage = seoInfo.opengraphImage
    ? `
            ***REMOVED***
                   "@type":"ImageObject",
                   "@id":"${seoInfo.opengraphUrl***REMOVED***#primaryimage",
                   "inLanguage":"en-US",
                   "url":"${seoInfo.opengraphImage.sourceUrl***REMOVED***",
                   "width":${seoInfo.opengraphImage.mediaDetails.width***REMOVED***,
                   "height":${seoInfo.opengraphImage.mediaDetails.height***REMOVED***,
                   "caption":"${seoInfo.opengraphImage.altText***REMOVED***"
              ***REMOVED***`
    : ``
  return (
    <Helmet
      htmlAttributes={{
        lang,
      ***REMOVED******REMOVED***
      title={seoInfo.title***REMOVED***
      titleTemplate={`${seoInfo.title.replace(/&amp;/g, "&")***REMOVED***`***REMOVED***
      meta={[
    ***REMOVED***
          name: `description`,
          content: seoInfo.metaDesc,
      ***REMOVED***
    ***REMOVED***
          property: `og:title`,
          content: seoInfo.opengraphTitle,
      ***REMOVED***
    ***REMOVED***
          property: `og:description`,
          content: seoInfo.opengraphDescription,
      ***REMOVED***
    ***REMOVED***
          property: `og:type`,
          content: seoInfo.opengraphType,
      ***REMOVED***
    ***REMOVED***
          name: `twitter:card`,
          content: `summary`,
      ***REMOVED***
    ***REMOVED***
          name: `twitter:creator`,
          content: `Sean`,
      ***REMOVED***
    ***REMOVED***
          name: `twitter:title`,
          content: seoInfo.title,
      ***REMOVED***
    ***REMOVED***
          name: `twitter:description`,
          content: seoInfo.metaDesc,
      ***REMOVED***
      ].concat(meta)***REMOVED***
    >
      <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
      <script type={"application/json-ld"***REMOVED***>
    ***REMOVED***`
      ***REMOVED***
             "@context":"https://schema.org",
             "@graph":[
            ***REMOVED***
                   "@type":"WebSite",
                   "@id":"${siteUrl***REMOVED***/#website",
                   "url":"${siteUrl***REMOVED***/",
                   "name":"${siteName***REMOVED***",
                   "description":"",
                   "potentialAction":[
                  ***REMOVED***
                         "@type":"SearchAction",
                         "target":"${siteUrl***REMOVED***/?s={search_term_string***REMOVED***",
                         "query-input":"required name=search_term_string"
                      ***REMOVED***
                 ***REMOVED***
                   "inLanguage":"${lang***REMOVED***"
              ***REMOVED***${openGraphImage***REMOVED***
            ***REMOVED***
                   "@type":"WebPage",
                   "@id":"${seoInfo.opengraphUrl***REMOVED***#webpage",
                   "url":"${seoInfo.opengraphUrl***REMOVED***",
                   "name":"${seoInfo.opengraphTitle***REMOVED***",
                   "isPartOf":{
                      "@id":"${siteUrl***REMOVED***/#website"
                 ***REMOVED***
                   "primaryImageOfPage":{
                      "@id":"${seoInfo.opengraphUrl***REMOVED***#primaryimage"
                 ***REMOVED***
                   "datePublished":"${date***REMOVED***+00:00",
                   "dateModified":"${seoInfo.opengraphModifiedTime***REMOVED***",
                   "description":"${seoInfo.opengraphDescription***REMOVED***",
                   "inLanguage":"en-US",
                   "potentialAction":[
                  ***REMOVED***
                         "@type":"ReadAction",
                         "target":[
                            "${seoInfo.opengraphUrl***REMOVED***"
                         ]
                      ***REMOVED***
                   ]
                ***REMOVED***
             ]
          ***REMOVED***
        `***REMOVED***
      </script>
    </Helmet>
  )
***REMOVED***

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
***REMOVED***

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  seoInfo: PropTypes.object,
***REMOVED***

export default SEO
