const React = require('react');
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

module.exports = Index;
