// Code for reading and setting any environment variables with the dotenv package
require("dotenv").config();

// Variables for storing
const axios = require('axios');
var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var moment = require('moment');
var fs = require('fs');

// Variable for taking in each command (concert-this; spotify-this-song; movie-this; do-what-it-says)
var argCommand = process.argv[2];

// CONCERT-THIS
// if the user calls "concert-this" at index 3, then run the following API call for bands
if (argCommand === "concert-this"){
    var artistName = process.argv[3];
    
    axios
    .get("https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp")
    .then(function(response){
            console.log("+========================== Concert Dates ==============================+");
            console.log("Venue Name: " + response.data.name);
            console.log("Venue Location: " + response.data.location);
            console.log("Date of Concert: " + moment().format("MM/DD/YYYY"));
            console.log("+======================================================================+");
        }
    )
}
else if (argCommand === "spotify-this-song"){
// // SPOTIFY-THIS-SONG
    var songSearch = process.argv[3];

    spotify
    .search({ 
        type: 'track', 
        query: 'All the Small Things' })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(err) {
      console.log(err);
    });
    
}

// MOVIE-THIS
else if(argCommand === "movie-this"){
    var movieName = process.argv[3];

        axios
        .get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy")
        .then(function(response){
                console.log("+========================== Movie Result ==============================+");
                console.log("Movie Title: " + response.data.Title);
                console.log("Year: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes Rating: " + response.data.rottenTomatoesRating);
                console.log("Country/Origin: " + response.data.Country);
                console.log("Language of the movie: " + response.data.Language);
                console.log("Movie Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
                console.log("+======================================================================+");
        })
        .catch(function(error) {
            if (error.response) {
            
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
            } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
            }
            console.log(error.config);
        });
        
}
    else(argCommand === "do-what-it-says");
// DO-WHAT-IT-SAYS










