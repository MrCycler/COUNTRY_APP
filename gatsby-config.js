module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    //source graphql integration
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Name for the remote schema Query type
        typeName: "CountriesAPI",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "countriesapi",
        // Url to query from
        url: "https://countries-274616.ew.r.appspot.com/",
      },
    },
    //styled components (https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/) 
    `gatsby-plugin-styled-components`,
    //gatsby modals with routing (https://www.gatsbyjs.com/plugins/gatsby-plugin-modal-routing/)
    `gatsby-plugin-modal-routing`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
