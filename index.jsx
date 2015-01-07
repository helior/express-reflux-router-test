var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div className="index-page">
        <h3>Index page.</h3>
        <Link to="fire">Link to Fire.</Link>
      </div>
    );
  }
});
