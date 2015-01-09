var Reflux = require('reflux');
var http = require('http');

var FireActions = {};
FireActions.load = Reflux.createAction({asyncResult: true});
FireActions.unload = Reflux.createAction();

// Listen to load events and call subsequent `completed` or `failed` actions.
FireActions.load.listen(function() {
  http.get('/data/fire.json', function(res){
    if (res.statusCode === 200) {
      var payload = '';
      res.on('data', function (chunk) {
        payload += chunk;
      });
      res.on('end', function(){
        FireActions.load.completed(JSON.parse(payload));
      });
    }
    else {
      FireActions.load.failed();
    }
  });
});


module.exports = FireActions;
