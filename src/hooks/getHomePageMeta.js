import { useStaticQuery, graphql ***REMOVED*** from "gatsby";

export const GetHomePageMeta = () => {
    const { wpcontent ***REMOVED*** = useStaticQuery(graphql`
          query GetHomePageQuery {
          wpcontent {
            seo {
              schema {
                siteUrl
                siteName
              ***REMOVED***
            ***REMOVED***
            pages(where: {title: "Home"***REMOVED***) {
              nodes {
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
        ***REMOVED***
    `)
    return wpcontent
***REMOVED***
