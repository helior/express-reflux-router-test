require('node-jsx').install({extension: '.jsx', harmony: true});

var express = require('express');
var React = require('react');
var Router = require('react-router');
var routes = require('./routes.jsx');

var app = express();
app.use(function(req, res) {
  Router.run(routes,req.url, function(Handler, state) {
    res.send(React.renderToString(React.createElement(Handler, null)));
  });
});

app.listen(3000);

// TODO: Introduce Reflux
