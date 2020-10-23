/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Jesmar Castillo',
    titleTemplate: `%s - Jesmar Castillo`,
    description: "Jesmar Castillo's portfolio and personal website.",
    url: 'https://jesmar.info'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jesmar Castillo`,
        short_name: `Jesmar Castillo`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `browser`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@assets': path.resolve(__dirname, 'src/assets'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@styles': path.resolve(__dirname, 'src/styles')
        },
        extensions: []
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/markdown`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`
  ]
};
