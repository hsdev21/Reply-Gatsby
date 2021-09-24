/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async function ({ actions, graphql ***REMOVED***) {
  const pluginOptions = {
    wordPressUrl: `https://valleyradiolo1.wpengine.com/`,
    uploadsUrl: `https://valleyradiolo1.wpengine.com/uploads/`,
  ***REMOVED***
  const {
    data: {
      wpcontent: {
        pages: { pageNodes ***REMOVED***,
        posts: { postNodes ***REMOVED***,
    ***REMOVED***
  ***REMOVED***
  ***REMOVED*** = await graphql(
    `
      query {
        wpcontent {
          pages(first: 20) {
            pageNodes: nodes {
              id
              uri
              template {
                __typename
              ***REMOVED***
            ***REMOVED***
          ***REMOVED***
          posts {
            postNodes: nodes {
              id
              uri
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
    `
  )
  pageNodes.forEach(node => {
    const uri = node.uri
    if (uri === "/") return
    switch (node.template.__typename) {
      case "WPGraphQL_CustomTemplateTemplate":
        actions.createPage({
          path: uri,
          component: require.resolve(`./src/templates/pages`),
          context: { ...node, pluginOptions ***REMOVED***,
        ***REMOVED***)
        break
      case "WPGraphQL_NoSidebarTemplate":
        actions.createPage({
          path: uri,
          component: require.resolve(`./src/templates/pagesNoSideBar`),
          context: { ...node, pluginOptions ***REMOVED***,
        ***REMOVED***)
        break
      case "WPGraphQL_ContactTemplate":
        actions.createPage({
          path: uri,
          component: require.resolve(`./src/templates/pageContact`),
          context: { ...node, pluginOptions ***REMOVED***,
        ***REMOVED***)
        break
      default:
        actions.createPage({
          path: uri,
          component: require.resolve(`./src/templates/pages`),
          context: { ...node, pluginOptions ***REMOVED***,
        ***REMOVED***)
    ***REMOVED***
  ***REMOVED***)
  postNodes.forEach(node => {
    const uri = node.uri
    actions.createPage({
      path: uri,
      component: require.resolve(`./src/templates/posts`),
      context: { ...node, pluginOptions ***REMOVED***,
    ***REMOVED***)
  ***REMOVED***)
***REMOVED***
