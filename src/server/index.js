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
import passport from 'passport';

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

//passport init
app.use(passport.initialize());
app.use(passport.session());


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
  res.render('frontend/index', {
    layout: false
  });
});


app.get('*', 
  passport.authenticate('instagram', { failureRedirect: '/login' }),
  function(req, res) {
    console.log("holaaa");
    res.redirect('/');
  });

//listen port
app.listen(port, err=>{
  if (!err) {
    open(`http://localhost:${port}`);
  }
});
