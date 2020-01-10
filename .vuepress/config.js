module.exports = {
  title: "Markus Siering",
  description: "I help companies design and deliver digital products faster.",
  head: [
    ["link", { rel: "icon", href: `/favicon-32x32.png` }],
    ["meta", { name: "theme-color", content: "#1c71b1" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "white" }
    ],
    ["link", { rel: "apple-touch-icon", href: `/apple-touch-icon.png` }]
  ],
  themeConfig: {
    // Author specific metadata. Used for homepage bio.
    author: {
      name: "Markus Siering",
      social: {
        twitter: "https://twitter.com/HerrBertling"
      }
    },
    // defaults to '/posts/' if postDir isn't provided.
    postDir: "/thoughts/"
  },
  evergreen: true,
};
