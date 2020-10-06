const express = require('express');

var app = express();

app.use(express.static('static'));

app.get('/veg-momos', function(request, response) {
  response.sendFile(__dirname+"/index.html");
});


app.listen(4000, function() {
  console.log("Server started on port 4000");
})
