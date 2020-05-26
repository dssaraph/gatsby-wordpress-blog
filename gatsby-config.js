module.exports = {
  siteMetadata: {
    title: `Apoorva Bhide`,
    description: `Designer, hacker, investor, nomad. Never satisfied. Deeply flawed.`,
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["SF Pro Display", "SF Pro Text"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `apoorvabhide.com`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false,
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
        ],
      },
    },
  ],
}
