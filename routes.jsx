var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute } = Router;

// Route handlers
var App = require('./components/app/app.jsx');
var Default = require('./components/default/default.jsx');
var Fire = require('./components/fire/fire.jsx');

var routes = (
  <Route handler={App}>
    <DefaultRoute name="default" handler={Default}/>
    <Route name="fire" path="fire/?:fireId?" handler={Fire}/>
  </Route>
);

module.exports = routes;
