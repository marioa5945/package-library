import webpack from 'webpack';
import config from './webpack.config';
import { resolve } from 'path';

(config.module as any).rules.push({
  test: /\.(ts|tsx)$/,
  exclude: /node-modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        cacheCompression: false,
      },
    },
    {
      loader: resolve('./packages/import-lodash-loader/index.ts'),
    },
    {
      loader: 'eslint-loader',
    },
  ],
});
(config.plugins as any).push(new webpack.HotModuleReplacementPlugin());
config.entry = ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/app.tsx'];

export default { ...config };
