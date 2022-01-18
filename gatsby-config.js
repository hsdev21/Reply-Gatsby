require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Reply OB/GYN & Fertility`,
    description: `Reply OB/GYN & Fertility`,
    author: `@eddieolivas`,
    www: true,
    https: true,
    siteUrl: "https://replygatsby.netlify.app",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GTM,
        includeInDevelopment: true,

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GA,
    //   },
    // },
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        excludePattern: /(excluded-link|external)/,
      },
    },
    {
      resolve: "gatsby-wpgraphql-inline-images",
      options: {
        wordPressUrl: `${process.env.BACKEND_URL}/`,
        uploadsUrl: process.env.UPLOADS_URL,
        processPostTypes: ["Page", "Post"],
        graphqlTypeName: `WPGraphQL`,
        generateWebp: true,
      },
    },
    {
      resolve: "gatsby-source-gravityforms",
      options: {
        // Base URL needs to include protocol (http/https)
        baseUrl: process.env.BACKEND_URL,
        // Gravity Forms API
        api: {
          key: process.env.CONSUMER_KEY,
          secret: process.env.CONSUMER_SECRET,
        },
        basicAuth: {
          user: process.env.BACKEND_USER,
          password: process.env.PASSWORD,
        },
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpcontent`,
        url: `${process.env.BACKEND_URL}/graphql`,
        refetchInterval: 60,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 100,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-no-index`,
    `gatsby-plugin-smoothscroll`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
