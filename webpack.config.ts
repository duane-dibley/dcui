import HtmlWebPackPlugin from 'html-webpack-plugin';
// import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  devServer: {
    port: 5000,
    // proxy: {
    //   '/companies': {
    //     changeOrigin: true,
    //     // onProxyReq: proxy => {
    //     //   proxy.setHeader('authorization', 'RgLMHWQ3NsjYufoQ49baXO4DA5w_6QRCxpCezx6V');
    //     //   proxy.setHeader('origin', 'https://api.companieshouse.gov.uk');
    //     // },
    //     // headers: {
    //     //   Authorization: 'RgLMHWQ3NsjYufoQ49baXO4DA5w_6QRCxpCezx6V'
    //     // },
    //     ignorePath: true,
    //     pathRewrite: { '^/companies': '' },
    //     secure: false,
    //     target: 'https://api.companieshouse.gov.uk'
    //   }
    // }
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'html-loader',
        test: /\.html$/,
      },
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/,
      },
      {
        exclude: /node_modules/,
        test: /\.styl$/,
        use: [
          { loader: 'style-loader' }, // creates style nodes from JS strings
          { loader: 'css-loader' }, // translates CSS into CommonJS
          { loader: 'stylus-loader' } // compiles Stylus to CSS
        ]
      },
      {
        exclude: /node_modules/,
        loader: 'ts-loader',
        test: /\.tsx?$/
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: './index.html',
      template: './src/index.html',
    })
  ],
  resolve: {
    extensions: [
      '.js',
      // '.styl',
      '.ts',
      '.tsx'
    ]
  }
};

export default config;
