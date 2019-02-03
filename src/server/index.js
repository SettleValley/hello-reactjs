// Dependecies
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import open from 'open';
// view engine package
import hbs from 'express-handlebars';
import * as hbsHelpers from '../lib/handlebars';

// passport package
import pass from 'passport';
import session from 'express-session';
import passport from '../config/passport';

import {instagram} from '../config/strategy';
// webpack configuration
import webpackConfig from '../../webpack.config';

//server port
const port = 3000;

// Environment
const isDevelopment = process.env.NODE_ENV !== 'production';

//express App
const app = express();

//passport config import
import '../config/passport';

//public
app.use(express.static(path.join(__dirname, '../public')));
// engine view 
app.engine('hbs',hbs({
  extname: "hbs",
  helpers: hbsHelpers
}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'hbs');

app.use(session({
  secret: 'sytr456-65tyrd-12wrt',
  resave: true, 
  saveUninitialized: true
}))
//passport init
passport(app);
instagram();
//webpack compiler
const webpackCompiler = webpack(webpackConfig)

//webpack middleware
if (isDevelopment) {
  app.use(webpackDevMiddleware(webpackCompiler));
  app.use(webpackHotMiddleware(webpackCompiler));
  }

app.use((req, res, next)=>{
  res.locals.test = "Testing Handlebars its ok";
  return next();
});
// Sending all trafic route
app.get('*', (req, res)=>{
  console.log(req.user);
  res.render('frontend/index', {
    layout: false
  });
});

app.get('/instagram', pass.authenticate('instagram'));

app.get('/instagram/callback', pass.authenticate('instagram', {
  successRedirect: '/users',
  failure: '/error'
}))

app.get('/', (req, res) => {
  res.send(req.user)
})
//listen port
app.listen(port, err=>{
  if (!err) {
    open(`http://localhost:${port}`);
  }
});