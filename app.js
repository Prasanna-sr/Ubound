var express = require('express');

var app = express();


app.use(express.static(__dirname + '/client'));
app.engine('.html', require('ejs').renderFile);

app.get('/test', function(req,res) {
	console.log('ok');
	res.send('test');
});


app.listen(3000, function() {
	console.log('server running in port 3000');
});