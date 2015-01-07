var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

module.exports = React.createClass({
  render: function() {
    return (
      <div id="main">
        <h1>Main Title</h1>
        <RouteHandler/>
      </div>
    );
  }
});
