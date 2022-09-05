const React = require('react');

function Layout({title, children}) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{title ? title : 'ReactSSR'}</title>

        {/* <link rel="stylesheet" href="https://unpkg.com/purecss@2.1.0/build/pure-min.css" integrity="sha384-yHIFVG6ClnONEA5yB5DJXfW2/KC173DIQrYoZMEtBvGzmf0PKiGyNEqe9N6BNDBH" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="/css/style.css"/>
        <script defer src="/js/application.js"></script> */}

      </head>
      <body>
        <div className='container'>{children}</div>
      </body>
    </html>
  );
}

module.exports = Layout;
