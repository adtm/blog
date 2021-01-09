module.exports = {
  siteMetadata: {
    title: `Tomas Eglinskas Blog`,
    author: `Tomas Eglinskas`,
    description: `Software Engineer, explorer and enthusiastic food eater`,
    siteUrl: "https://tomas.life/",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.summary,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                });
              });
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      fields { slug }
                      frontmatter {
                        title
                        summary
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Tomas Eglinskas RSS Feed",
            match: "^/blog/",
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    "@chakra-ui/gatsby-plugin",
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/blog`, `/blog/*`],
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
        description: "Software Engineer, explorer and enthusiastic food eater",
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fav.png`
      },
    }
  ],
}
