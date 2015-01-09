var React = require('react');
var Router = require('react-router');
var routes = require('./routes.jsx');

Router.run(routes, Router.HistoryLocation, function(Handler, state) {
  /**
   * Assumptions:
   *   - From the Handler we know which "component" we have, so we can
   *     dynamically invoke the corresponding action.
   *   - After requiring actions, we know which specific action to invoke.
   *
   * OR (current winner)
   *   - We simply let the component require actions and stores, and invoke the
   *     load action with the handlers parameters.
   */

  React.render(React.createElement(Handler, null), document.getElementById('app'));
});
