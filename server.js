/* eslint-disable no-console, no-use-before-define */
// import path from 'path'
import express from 'express'
// import qs from 'qs'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from './webpack.config'
// import React from 'react'
// import { renderToString } from 'react-dom/server'
// import HelloMessage from './components/test'
import rootRouter from './handlers'

const app = express()
const port = 3000


var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

app.use(express.static('static'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.use("/", rootRouter);

function rootHandler(req, res) {
  const html = renderToString(<HelloMessage name='John'/>);
  res.render('index', {
    title: 'hello',
    html: html
  });
}

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
