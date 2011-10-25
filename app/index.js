var express = require('express'),
	app = express.createServer(),
	port = process.env.PORT || 3000;
	
app.use(express.static(__dirname + '/../public'));

console.log('mongodb:', process.env.MONGOHQ_URL);

app.listen(port, function(){
	console.log('application running on ' + port);
});
