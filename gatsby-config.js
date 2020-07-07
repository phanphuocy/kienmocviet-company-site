module.exports = {
  siteMetadata: {
    title: `IAI`,
    description: `This is the description`,
    author: `Lop Truong Design`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `JsonFile` // a fixed string
      }
    },
    // Telling Gatsby to source data in general
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data/`
      }
    },
    // Telling Gatsby to source each Ten Du An Content
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./contents/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `static/images`
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/reusable/Layout/layout.js")
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200
            }
          }
        ]
      }
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
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-158673998-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true
      }
    }
  ]
};
