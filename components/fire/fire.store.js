var Reflux = require('reflux');
var FireActions = require('./fire.actions');
var _ = require('lodash');

var _fires = {};

var FireStore = Reflux.createStore({
  listenables: [FireActions],
  onLoadCompleted: function(data) {
    _.forOwn(data.burns, function(item) {
      _fires[item.type] = item.reaction;
    });
    this.trigger(_fires);
  },

  onLoadFailed: function() {
    console.log('Store: load failed');
  },

  onUnload: function() {
    _fires = {};
    this.trigger(_fires);
  },

  getInitialState: function() {
    return _fires;
  }
});

module.exports = FireStore;
