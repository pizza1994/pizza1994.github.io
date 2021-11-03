module.exports = {
  pathPrefix: "/pizza1994.github.io",
  siteMetadata: {
    description: "Personal page of Luca Pitzalis",
    locale: "en",
    title: "Luca Pitzalis",
    showThemeLogo: true,
    formspreeEndpoint: "https://formspree.io/f/moqyowly",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sharp",
    },
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        theme: "gh-inspired",
      },
    },
    
  ],
}
