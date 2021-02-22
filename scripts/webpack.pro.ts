import config from './webpack.config';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { resolve } from 'path';

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
  new CopyPlugin({
    patterns: [
      {
        from: './public',
        to: './',
        globOptions: {
          ignore: ['**/.DS_Store'],
        },
      },
    ],
  })
);

export default { ...config };
