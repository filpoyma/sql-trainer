const express = require('express');

const {appMiddlewares, errorHandler} = require("./middlewares/appMiddleware");
const indexRouter = require('./routes/index');

const app = express();

app.set('view engine', 'hbs');

appMiddlewares(app);

app.use('/api', indexRouter);

errorHandler(app);

module.exports = app;
