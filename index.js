const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();

//Connect to MongoDB Database
const mongoose = require('mongoose');

//For MongoDB Atlas - Cloud Hosting
//Used environment variables on local and heroku config on cloud to securely pass credentials
mongoose.connect('mongodb+srv://' + process.env.MONGODB_USERNAME + ':' + process.env.MONGODB_PASSWORD + '@cluster0-g5078.mongodb.net/movieDB?retryWrites=true', {useNewUrlParser : true});

//For Local MongoDB Database
//mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser : true});

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

//API Endpoints
app.use('/movie', movie);
app.use('/show', show);
app.use('/search', search);


let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

//Populate data into MongoDB using omdb-client

/*
var omdbClient = require('omdb-client');
const Show = require('./models/movie.model');

var keyword = ['saw','love', 'batman', 'flash', 'office', 'sunshine', 'stranger', 'day', 'lord', 'little', 'star', 'dark', 'jerry','noddy'];

keyword.forEach(function(searchTerm){
    var params = {
        apiKey: process.env.OMDB_API_KEY,
        query: searchTerm
    }

    omdbClient.search(params, function(err, movies) {
        if(err) {
            return console.error(err);
        }

        if(movies.Search.length > 0) {

            movies.Search.forEach(function(movie){
                var newShow = Show({
                    Title: movie.Title,
                    Year: movie.Year,
                    Type: movie.Type,
                    imdbID: movie.imdbID
                });

                newShow.save();
            });
        }
    });

});
*/

//Code to Populate Data into MongoDB

/*const http = require('http');
const Show = require('./models/movie.model');

keywords used = love, batman, flash, office
const urldata = {
  host: 'omdbapi.com',
  port: '80',
  path: '/?apikey=<YOUR_API_KEY>&s=flash',
  method: 'GET'
};

const req = http.request(urldata, function(res) {
  var data = '';

  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    data += chunk;
  });
  res.on('end', function() {
        var body = JSON.parse(data);
        body.Search.forEach(function(showEntry) {
            var newShow = Show({
            Title: showEntry.Title,
            Year: showEntry.Year,
            Type: showEntry.Type,
            imdbID: showEntry.imdbID
            });

            newShow.save();
        }); 
  });
});

req.end();*/