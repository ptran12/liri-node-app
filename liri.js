require("dotenv").config();
var request = require("request");
var keys = require('./keys.js')
var Spotify = require("node-spotify-api");
var moment = require("moment");

var userInput = process.argv[2];

// MOVIE FUNCTION

function movieThis() {
    var thisMovie = process.argv[3]
    var queryUrl = "http://www.omdbapi.com/?t=" + thisMovie + "&y=&plot=short&apikey=trilogy";
    request(queryUrl, (err, response, body) => {
        if (err) {
            return err;
        }
        if (response.statusCode === 200) {
            let json = JSON.parse(body);

            console.log(("Title: ") + json.Title);
            console.log(("Plot: ") + json.Plot);
            console.log(("Actors: ") + json.Actors);
            console.log(("Year Released: ") + json.Released);
            console.log(("IMDB Ratings: ") + json.imdbRating);
            console.log(("Country: ") + json.Country);
            console.log(("Language: ") + json.Language);
        }
    })
}


switch (userInput) {
    case 'movie-this':
        movieThis();
        break;
}