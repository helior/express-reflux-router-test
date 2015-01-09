var Reflux = require('reflux');
var React = require('react');
var Router = require('react-router');
var _ = require('lodash');
var Link = Router.Link;
var FireStore = require('./fire.store');
var FireAction = require('./fire.actions');

module.exports = React.createClass({
  mixins: [ Reflux.connect(FireStore, 'fires'), Router.State ],
  componentDidMount: function() {
    FireAction.load();
  },
  render: function() {
    var { fireId } = this.getParams();
    var message = '';
    if (fireId) {
      message = 'Responses for ' + fireId + ': ' + this.state.fires[fireId];
    }
    else {
      message = [];
      _.forOwn(this.state.fires, function(val, key) {
        message.push(<li><Link to={'/fire/' + key}>Reaction: {val}</Link></li>);
      });

      message = <ul>{message}</ul>;
    }

    return (
      <div className="fire-page">
        <h4>Hi, this is Fire.</h4>
        <h4>{message}</h4>
        <Link to="default">Link back to the default page.</Link>
      </div>
    );
  }
});
