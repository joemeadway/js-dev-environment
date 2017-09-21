import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();
/* eslint-disable no-console */

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res){
	res.json([
		{"id":1, "firstName":"Johnny", "lastName":"Jump", "email":"johnny@email.com"},
		{"id":2, "firstName":"Jimmy", "lastName":"Jump", "email":"jimmy@email.com"},
		{"id":3, "firstName":"Jenny", "lastName":"Jump", "email":"jenny@email.com"},
	])
});

app.listen(port, function(err){
	if(err){
		console.log(err);
	}
	else{
		open('http://localhost:'+port);
	}
});
