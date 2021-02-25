import express from 'express';
import tomlJson from 'toml-json';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.server';
import serverPrint from '../packages/server-print';

const app = express();
const compiler = webpack(webpackConfig);
const config = tomlJson({ fileUrl: './config.toml' });

app.use(express.static('public')); // static

// app.get('*', function (req: any, res: unknown, next: any) {
//   if (!req.url.match('static') && !req.url.match('/__webpack_hmr') && !req.url.match('bundle.js')) {
//     req.url = '/';
//   }
//   if (req.url === '/react-components/js/main.bundle.js') {
//     req.url = '/js/main.bundle.js';
//   }
//   next();
// });

// Tell express to use the webpack-dev-middleware and use the webpack.config.js configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: (webpackConfig.output as any).publicPath,
  })
);

app.use(webpackHotMiddleware(compiler));

const port = (config.server as any).port;
app.listen(port, function () {
  serverPrint(port, '/#/demos');
});
