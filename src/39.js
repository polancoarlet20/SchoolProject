var express = require('express');
var app = express();

app.get('/', function(req, res) {
  var data = {
    message: 'Hello World!'
  };

  res.send(data);
});

app.listen(8080, function() {
  console.log('Server is running on http://127.0.0.1:8080');
});
