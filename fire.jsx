var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div className="fire-page">
        <h4>Hi, this is Fire.</h4>
        <Link to="index">Linkk back to index.</Link>
      </div>
    );
  }
});
