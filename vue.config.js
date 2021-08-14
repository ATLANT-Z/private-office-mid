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
