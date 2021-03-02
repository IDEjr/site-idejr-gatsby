module.exports = {
  siteMetadata: {
    title: `IDE`,
    description: `Somos é a empresa júnior do instituto de informática da UFRGS. Uma empresa com foco em desenvolvimento de aplicações web.`,
    author: `@ide_jr`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Website IDE`,
        short_name: `IDE`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#392B79`,
        display: `minimal-ui`,
        icon: `src/assets/logo_roxo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@pages": "src/pages",
          "@assets": "src/assets",
          "@style": "src/style",
          "@utils": "src/utils",
          "@support": "src/support",
        },
        extensions: [
          "js",
        ],
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
