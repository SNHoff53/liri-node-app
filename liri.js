// Code for reading and setting any environment variables with the dotenv package
require('dotenv').config();

// Variables for storing
const axios = require('axios');
var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var moment = require('moment');
var fs = require('fs');

// Variable for taking in each command (concert-this; spotify-this-song; movie-this; do-what-it-says)
var argCommand = process.argv[3];

function switchCommands(){
    switch (argCommand){
        case "concert-this":
        concertThis;
        break;

        case "spotify-this-song":
        spotifyThis;
        break;

        case "movie-this":
        movieThis;
        break;

        case "do-what-it-says":
        doWhatItSays;
        break;
    }
}

// CONCERT-THIS
function concertThis(){
    axios
    .get("https://rest.bandsintown.com/artists/" + argCommand + "/events?app_id=codingbootcamp")
    .then(function(response){
        console.log("+========================== Concert Dates ==============================+");
        console.log("Venue Name: " + response.data.name);
        console.log("Venue Location: " + response.data.location);
        console.log("Date of Concert: " + moment().format("MM/DD/YYYY"));
        console.log("+======================================================================+");
    })
    .catch(function(error) {
        if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        } else if (error.request) {
        // if the request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
        } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
        }
        console.log(error.config);
    });
}
function spotifyThis(){
// // SPOTIFY-THIS-SONG
    
    // var spotify = new Spotify({
    //     id: keys.spotify.id,
    //     search: keys.spotify.secret
    // });

    spotify
    .search({ 
        type: 'track', 
        query: 'All the Small Things' 
    })
    .then(function(response){
        console.log(response);
        console.log("+========================== Music Results ==============================+");
        console.log("Artist(s) Name: " + response.data.name);
        console.log("Song Name: " + response.data.song);
        console.log("Link to Preview Song: " + response.data.preview_url);
        console.log("Album: " + response.data.album);
        console.log("+======================================================================+");;
    })
    .catch(function(err) {
        console.log(err);
    });
}

// MOVIE-THIS
function movieThis(){
        axios
        .get("http://www.omdbapi.com/?t=" + argCommand + "&y=&plot=short&apikey=trilogy")
        .then(function(response){
                console.log("+========================== Movie Result ==============================+");
                console.log("Movie Title: " + response.data.Title);
                console.log("Year: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
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
function doWhatItSays(){
// DO-WHAT-IT-SAYS
fs.readFile("random.txt", "utf8", function(error, data){
    if(error){
        return console.log(error);
    }
    // We want to print the contents within the random.txt, or "data"
    console.log(data);

    // Splitting the data/contents by commas. This makes it easier to read.
    var dataArr = data.split(",");

    // Re-display the content as an array for use later
    console.log(dataArr)
    })
}