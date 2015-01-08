var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  mixins: [ Router.State ],
  render: function() {
    var { fireId } = this.getParams();

    return (
      <div className="fire-page">
        <h4>Hi, this is Fire.</h4>
        <h6>Param: {{fireId}}</h6>
        <Link to="default">Link back to the default page.</Link>
      </div>
    );
  }
});
