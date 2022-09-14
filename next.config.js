
//  const CompressionPlugin  = require("compression-webpack-plugin")
// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: ["ecinfosolutions.com"],
//   },


//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: [`@svgr/webpack`],
//     });

//     config.plugins.push(
//       new CompressionPlugin({
//         test: /\.js$|\.css$|\.html$/,
//       }),
//     );

//     return config;
//   },
    
//   target: 'serverless',
// };



const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const CompressionPlugin  = require("compression-webpack-plugin")
const nextConfig = {
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 50 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 5,
  }
}
module.exports = {
  target: "serverless",
  webpack (config) {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          publicPath: "/_next/static/",
          outputPath: "static/",
          name: '[name].[ext]'
        }
      }
    })
    config.plugins.push(
      new CompressionPlugin({
        test: /\.js$|\.css$|\.html$/,
      }),
    );
    return config;
  }

}






