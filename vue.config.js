const basePath = "/private-office-mid/dist/";

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? basePath : "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "public/scss/abstract";`,
      },
    },
  },
};

// const basePath = "/vue-install-odessa/";
// module.exports = {
//   filenameHashing: false,
//   publicPath: process.env.NODE_ENV === "production" ? basePath : "/",
//   css: {
//     loaderOptions: {
//       sass: {
//         prependData: `@import "public/scss/abstract";`,
//       },
//     },
//   },
// };
