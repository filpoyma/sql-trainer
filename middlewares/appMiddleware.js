const logger = require('morgan');
const express = require('express');
const path = require('path');

exports.appMiddlewares = (app) => {
  const corsMiddleware = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  };
  app.use(corsMiddleware);
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({extended: false}));
  app.use(express.static(path.resolve('client', 'build')));
}

exports.errorHandler = (app) => {
  // catch 404 and forward to error handler
  app.use((req, res) => {
    res.render('error', {message: `Page ${req.hostname+req.url} not found.`});
  });

// error handler
  app.use( (err, req, res) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
  });
}
