const dotenv = require("dotenv");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}


const { spaceId, accessToken } = process.env;

module.exports = {
  siteMetadata: {
    title: `Loïc Chambost`,
    description: `Site CV`,
    author: ``
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
          spaceId : process.env.CONTENTFUL_SPACE_ID,
          accessToken : process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Loïc Chambost`,
        short_name: `Loïc Chambost`,
        start_url: `/`,
        background_color: `#E36D0B`,
        theme_color: `#FFFFFF`,
        display: 'standalone',
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `maskable`,
        },
      }
    }, // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
    `gatsby-plugin-offline`
  ]
};
