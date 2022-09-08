const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const dbCheck = require('./db/dbCheck');

const indexRoutes = require('./routes/indexRoutes');

dbCheck();

app.use(express.static(path.resolve('client', 'build')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use('/api', indexRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.resolve('client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 3100;
app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message)
  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
