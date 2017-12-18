module.exports = {
  siteMetadata: {
    title: `Studio Dog Boy`
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `i922ybsp9u6i`,
        accessToken: `86cfb31622c70dd9d33629832de5b1d13987e94d5ed5b1e268509b8d8951750a`
      },
    },
    {
      resolve: `gatsby-plugin-netlify`
    },
    `gatsby-transformer-sharp`
  ],
}
