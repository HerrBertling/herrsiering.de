/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: "netlify",
  server: "./server.js",
  ignoredRouteFiles: [".*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: ".netlify/functions-internal/server.js",
  // publicPath: "/build/",
  mdx: async (filename) => {
    const [rehypePrism] = await Promise.all([
      import("@mapbox/rehype-prism").then((mod) => mod.default),
    ]);
    return {
      rehypePlugins: [rehypePrism],
    };
  },
};
