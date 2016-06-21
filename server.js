
var express = require('express'); // for routing
var app = express(); //init the server
var path = require('path');
//var port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/Client'));
// app.use('/app', express.static('app'));
app.use('/booksCatalog',require('./Controllers/booksCatalogServerController'));

app.get('/',function (req, res) {
      res.sendFile(path.join(__dirname+'/Client/index.html'));
});

// app.get('/', function (req, res) {
//     return res.redirect('/app');
// });

//listen on port
var server = app.listen(3000, function(){
   // console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
    console.log("SERVER IS ON");
});