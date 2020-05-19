[![Netlify Status](https://api.netlify.com/api/v1/badges/c1f0d1c8-1ce4-4833-aed5-1ac6d9a2f9ae/deploy-status)](https://app.netlify.com/sites/hopeful-hawking-c06368/deploys)

# WordPress to Gatsby.js
## Simple static site for an existing WordPress blog

This is my first attempt at learning Gatsby.js. I'm using an existing WordPress blog for this website so that anybody already blogging on WordPress can move to Gatsby.js using my code.

To get started, follow the official tutorial at [Gatsby.js Tutorials](https://www.gatsbyjs.org/tutorial)

Once you have the development environment setup, clone this repo and edit the file `gatsby-config.js`:
```javascript
module.exports = {
  siteMetadata: {
    title: `<your-title-here>`,
    description: `<your-site-description>`,
    ...
```
Now edit the configuration for the gatsby-source-wordpress plugin within the same file:
```javascript
  plugins: [
    ...
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `<your-site.com>`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
        searchAndReplaceContentUrls: {    // This is just in case you need to fix mixed content
          sourceUrl: "http://<your-site.com>",
          replacementUrl: "https://<your-site.com>",
        },
        includedRoutes: [
          ...
        ],
        excludedRoutes: [
          ...
    ...
```

If you are running a basic WordPress blog, the above edit should be sufficient.

Run `npm install` from the Gatsby root directory and once all node modules are installed, run `gatsby develop`

You should be able to visit your Gatsby.js static blog at `http://localhost:8000`

Cheers!
