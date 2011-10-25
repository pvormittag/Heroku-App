var express = require('express'),
	app = express.createServer(),
	port = process.env.PORT || 3000;
	
app.use(express.static(__dirname + '/../public'));

app.get('/mongodb', function(req, res){
	res.send('mongodb: ' + process.env.MONGOHQ_URL);
});

app.listen(port, function(){
	console.log('application running on ' + port);
});
