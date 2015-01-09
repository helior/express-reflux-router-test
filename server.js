require('node-jsx').install({extension: '.jsx', harmony: true});

var express = require('express');
var React = require('react');
var Router = require('react-router');
var routes = require('./routes.jsx');

var app = express();
app.set('view engine', 'ejs');
app.use(express.static('static'));

app.use(function(req, res) {
  Router.run(routes,req.url, function(Handler, state) {
    var output = React.renderToString(React.createElement(Handler, null));
    res.render('index', {content: output});
  });
});

app.listen(3000);
