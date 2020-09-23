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
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-145399538-1",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
     resolve: `gatsby-plugin-manifest`,
     options: {
      name: `Tomas Eglinskas`,
      short_name: `Blog`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/fav.png`
    }, 
    }
  ],
}
