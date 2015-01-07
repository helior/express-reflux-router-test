var React = require('react');
var Router = require('react-router');
var routes = require('./routes.jsx');

module.exports = function(req, res) {
  Router.run(routes,req.url, function(Handler, state) {
    res.send(React.renderToString(<Handler />));
  });
}
