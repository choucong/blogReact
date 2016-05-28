import React from 'react'
import { renderToString } from 'react-dom/server'
import HelloMessage from './components/test'
import express from 'express'

var rootRouter = express.Router();

rootRouter.get('/', function(req, res) {
  const html = renderToString(<HelloMessage name='John'/>);
  res.render('index', {
    title: 'hello',
    html: html
  });
})

export default rootRouter;
