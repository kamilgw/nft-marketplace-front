const path = require('path')
const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const pluginAntdLess = withAntdLess({
  // optional
  modifyVars: { '@primary-color': '#04f' },
  // optional
  // lessVarsFilePath: './src/styles/variables.less',
  // optional
  // lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  // cssLoaderOptions: {},

  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")]
  },

  future: {
    // if you use webpack5
    webpack5: true,
  },

  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    LOGIN_URL: process.env.LOGIN_URL,
    LOGOUT_URL: process.env.LOGOUT_URL,
    ENVIRONMENT: process.env.ENVIRONMENT,
  }
});


module.exports = withPlugins([[pluginAntdLess]], {
  webpack(config) {
    return config;
  },
  // images: {
  //   disableStaticImages: true,
  // },
  // NextFuture
  // future: {
  //   webpack5: true,
  // },
});