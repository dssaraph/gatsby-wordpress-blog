module.exports = {
  siteMetadata: {
    title: `Apoorva Bhide`,
    description: `Sourcing data from WordPress`,
    menuLinks:[
      {
        name:'home',
        link:'/'
      },
    ]
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `apoorvabhide.com`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
        searchAndReplaceContentUrls: {
          sourceUrl: "http://apoorvabhide.com",
          replacementUrl: "https://apoorvabhide.com",
        },
        includedRoutes: [
          "**/posts",
          "**/pages",
          "**/media",
          "**/categories",
          "**/tags",
        ],
        excludedRoutes: [
          "**/pages/home",
          "**/pages/blog",
          "**/taxonomies",
          "**/users",
          "/yoast/**",
          "/contact-form-7/**",
          "/akismet/**",
          "/wordfence/**",
          "/settings**",
          "/themes**",
          "/acf**",
        ],
      },
    },
  ],
}
