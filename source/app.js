var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('DevOps - Strona startowa!');
	console.log('Zażądano strony Start');
});

app.get('/users', function(req, res){
	res.send('DevOps - strona Users!');
	console.log('Zażądano strony Users');
});

app.get('/info', function(req, res){
	res.send('DevOps - strona Info!');
	console.log('Zażądano strony Info');
});

app.listen(3001, function(){
	console.log('Aplikacja OK');
}); 
