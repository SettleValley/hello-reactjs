// Dependecies
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import open from 'open';

// webpack configuration
import webpackConfig from '../../webpack.config';

//server port
const port = 3000;

// Environment
const isDevelopment = process.env.NODE_ENV !== 'production';

//express App
const app = express();

//public
app.use(express.static(path.join(__dirname, '../public')));

//webpack compiler
const webpackCompiler = webpack(webpackConfig)

//webpack middleware
if (isDevelopment) {
  app.use(webpackDevMiddleware(webpackCompiler));
  app.use(webpackHotMiddleware(webpackCompiler));
  }

// Sending all trafic route
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//listen port
app.listen(port, err=>{
  if (!err) {
    open(`http://localhost:${port}`);
  }
});
