module.exports = {
  siteMetadata: {
    title: `Tomas Eglinskas`,
    author: `Tomas Eglinskas`,
    description: `Software Engineer, system design and good food maniac`,
    siteUrl: "https://tomas.life/",
  },
  plugins: [
    "gatsby-plugin-chakra-ui",
    "gatsby-plugin-use-dark-mode",
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/components/blog/posts`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/components/blog/posts`
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          posts: require.resolve("./src/components/blog/Post.jsx"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/blog`],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Container.jsx`),
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
        short_name: `tomas.life`,
        description: "Software Engineer, system design and good food maniac",
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fav.png`
      },
    }
  ],
}
