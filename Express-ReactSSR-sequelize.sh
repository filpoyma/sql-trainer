#!/bin/bash
#  Файл выпонняет установку sequelize для postgres, express, ReactSSR

# Для того что бы все сработало:
# 1) chmod +x Express-ReactSSR-sequelize.sh  // файл по умолчанию не исполняемый, перед запуском выполнить эту команду в консоли где расположен файл.
# 2) кидаете его в корень нового проекта.
# 3) Теперь файл можно запускать, введя ./Express-ReactSSR-sequelize.sh в консоли.

npm init -y

echo '{
  "name": "Express-ReactSSR",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js --ignore session --ext js,jsx",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}' > package.json

npm i sequelize pg pg-hstore dotenv express morgan @babel/cli @babel/core @babel/preset-react @babel/register @babel/preset-env react react-dom
npm i -D sequelize-cli nodemon
npx create-gitignore node


echo "const path = require('path');
require('dotenv').config()
 module.exports = {
 'config': path.resolve('db', 'dbconfig.json'),
 'models-path': path.resolve('db', 'models'),
 'seeders-path': path.resolve('db', 'seeders'),
 'migrations-path': path.resolve('db', 'migrations')
 };" > .sequelizerc


npx sequelize init

echo '{
  "development": {
    "use_env_variable": "DEV_DB_URL",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "use_env_variable": "TEST_DB_URL",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "PROD_DB_URL",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "seederStorage": "sequelize",
  "seederStorageTableName": "SequelizeData"
}' > ./db/dbconfig.json


echo "const { sequelize } = require('./models');
module.exports = async () => {
  try {
    await sequelize.authenticate();
    console.log('База данных успешно подключена.');
  } catch (error) {
    console.error('База не подключена.', error.message);
  }
};" > db/dbCheck.js  

echo '
DEV_DB_URL=postgres://admindb:admindb@localhost:5432/dbName
TEST_DB_URL=postgres://username:password@localhost:5432/dbName
PROD_DB_URL=postgres://username:password@localhost:5432/dbName' > .env 

echo '
DEV_DB_URL=postgres://admindb:admindb@localhost:5432/dbName
TEST_DB_URL=postgres://username_testdb:password@localhost:5432/dbName
PROD_DB_URL=postgres://username:password@server.com/dbName' > .env_example

echo "const express = require('express'); 
const app = express(); 
require('@babel/register');
const morgan = require('morgan'); 
const path = require('path');
require('dotenv').config(); 

//импорт вспомогательных ф-й
const dbCheck = require('./db/dbCheck');

// импорт роутов
const indexRoutes = require('./routes/indexRoutes');

 // вызов функции проверки соединения с базоый данных
dbCheck();

app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//роутеры
app.use('/', indexRoutes);

const PORT = process.env.PORT || 3100;
app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message)
  console.log(\`Сервер запущен на http://localhost:\${PORT} \`);
});" > app.js

mkdir -p views
mkdir -p public/js
mkdir -p public/images
mkdir -p public/css
mkdir -p routes
mkdir -p controllers
mkdir -p middlewares
mkdir -p lib

echo "const React = require('react');

function Layout({title, children}) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{title ? title : 'ReactSSR'}</title>

        {/* <link rel=\"stylesheet\" href=\"https://unpkg.com/purecss@2.1.0/build/pure-min.css\" integrity=\"sha384-yHIFVG6ClnONEA5yB5DJXfW2/KC173DIQrYoZMEtBvGzmf0PKiGyNEqe9N6BNDBH\" crossOrigin=\"anonymous\"></link>
        <link rel=\"stylesheet\" href=\"/css/style.css\"/>
        <script defer src=\"/js/application.js\"></script> */}

      </head>
      <body>
        <div className='container'>{children}</div>
      </body>
    </html>
  );
}

module.exports = Layout;" > ./views/Layout.jsx

echo "const React = require('react');
const Layout = require('./Layout');

function Index({title}) {
  return (
    <Layout>
      <div>
        <h2>{title}</h2>
      </div>
    </Layout>
  );
}

module.exports = Index;" > ./views/Index.jsx

echo "const ReactDomServer = require('react-dom/server');
const React = require('react');

const render = (reactElement, properties, response) => {
    const reactEl = React.createElement(reactElement, properties);
    const html = ReactDomServer.renderToStaticMarkup(reactEl);
    response.write('<!DOCTYPE html>');
    response.write(html);
    response.end();
}

module.exports = render;" > ./lib/render.js

echo "const express = require('express');
const route = express.Router();

const render = require('../lib/render');
const Index = require('../views/Index');

route.get('/', (req, res) => {
  render(Index, {title: 'Welcome to Express - ReactSSR'}, res)
  })

module.exports = route;" > ./routes/indexRoutes.js

echo '{
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": { "node": "14" },
          "modules": false
        }
      ],
      "@babel/preset-react"
    ]
  }' > .babelrc

  echo ".container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }" > public/css/style.css



