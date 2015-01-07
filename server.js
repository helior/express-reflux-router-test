require('node-jsx').install({extension: '.jsx', harmony: true});
var express = require('express');
var expressReact = require('./expressReact');

var app = express();
app.use('/test', function (req, res) {res.json({'test' : 'good'})});
app.use(expressReact);

app.listen(3000);


// TODO: Introduce Reflux
// TODO: Introduce Webpack
