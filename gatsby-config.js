module.exports = {
  siteMetadata: {
    title: `Tomas Eglinskas`,
    author: `Tomas Eglinskas`,
    description: `Personal blog of Tomas Eglinskas`,
    siteUrl: "https://www.tomas.life/",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about`, `/`],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
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

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
