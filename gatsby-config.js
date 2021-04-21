module.exports = {
  siteMetadata: {
    title: "Carlos Garcia | Developer",
    description:
      "Hola Mundo! Soy Carlos García un desarrollador apasionado por la data y por su trabajo, te veo en mi sitio web para que conozcas mas sobre mi, Entra ya!",
    siteUrl: "https://carlos.lat",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "8nhE0HtPe7j23Ou82gK8L5TuJAvryedAlqPjWFFCp18",
        spaceId: "4ka2vab98k1d",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "269680157",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Fira Code\:300,400,500,600`
        ],
        display: 'swap'
      }
    },
  ],
};
