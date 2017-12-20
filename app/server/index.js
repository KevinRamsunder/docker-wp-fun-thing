import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackConfig from '../webpack/client.dev.js';
import ssr from './ssr';

const app = express();

// Serve our assets in the public directory
app.use('/', express.static('public'));

// In dev env, use webpack dev middleware to serve our js files
if (app.get('env') === 'development') {
  const compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
    },
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

// Route all paths to the react application middleware
app.use('*', ssr);

app.listen(3000, () => {
  console.log('App running on localhost:3000');
});
