var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute } = Router;

var App = require('./main.jsx');
var Index = require('./index.jsx');
var Fire = require('./fire.jsx');

var routes = (
  <Route handler={App}>
    <DefaultRoute name="index" handler={Index}/>
    <Route name="fire" path="fire" handler={Fire}/>
  </Route>
);

module.exports = routes;
