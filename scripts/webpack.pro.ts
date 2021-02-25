import config from './webpack.config';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { resolve } from 'path';
import { container } from 'webpack';
const { ModuleFederationPlugin } = container;

delete config.devtool;
config.mode = 'production';
(config.output as any).filename = 'js/[name].[contenthash].bundle.js';
(config.module as any).rules.push({
  test: /\.(ts|tsx)$/,
  exclude: /node-modules/,
  use: [
    'babel-loader',
    {
      loader: resolve('./packages/import-lodash-loader/index.ts'),
    },
  ],
});
(config.plugins as any).push(new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }));
(config.plugins as any).push(
  new ModuleFederationPlugin({
    name: 'packageLib',
    filename: 'js/remoteEntry.js',
    exposes: {
      './router': './src/app',
    },
  }),
  new CopyPlugin({
    patterns: [
      {
        from: './public',
        to: './',
      },
    ],
  })
);

export default { ...config };
