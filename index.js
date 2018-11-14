const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://' + process.env.MONGODB_USERNAME + ':' + process.env.MONGODB_PASSWORD + '@cluster0-g5078.mongodb.net/movieDB?retryWrites=true', {useNewUrlParser : true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error while connecting to MongoDB Database. Please check your connection.\n'));
db.on('open', function(callback) {
	console.log('Connected to MongoDB database.');
});


const movie = require('./routes/movie.route');
const show = require('./routes/show.route');
const search = require('./routes/search.route');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/movie', movie);
app.use('/show', show);
app.use('/search', search);

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});


//const http = require('http');
//const Show = require('./models/movie.model');

//GET DATA
//love, batman, flash, office
//const urldata = {
//  host: 'omdbapi.com',
//  port: '80',
//  path: '/?apikey=<YOUR_API_KEY>&s=flash',
//  method: 'GET'
//};
//
//const req = http.request(urldata, function(res) {
//  var data = '';
//
//  res.setEncoding('utf8');
//  res.on('data', function(chunk) {
//    data += chunk;
//  });
//  res.on('end', function() {
//        var body = JSON.parse(data);
//        body.Search.forEach(function(showEntry) {
//            var newShow = Show({
//            Title: showEntry.Title,
//            Year: showEntry.Year,
//            Type: showEntry.Type,
//            imdbID: showEntry.imdbID
//            });
//
//            newShow.save();
//        }); 
//  });
//});
//
//req.end();