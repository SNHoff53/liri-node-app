// Code for reading and setting any environment variables with the dotenv package
require('dotenv').config();

// Variables for storing
var axios = require('axios');
var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var moment = require('moment');
var fs = require('fs');

// Variable for taking in each command (concert-this; spotify-this-song; movie-this; do-what-it-says)
var argCommand = process.argv[2];
var userParameters = process.argv.slice(3).join(" ");

function switchCommands(){
    switch (argCommand){
        case "concert-this":
        concertThis();
        break;

        case "spotify-this-song":
        spotifyThis();
        break;

        case "movie-this":
        movieThis();
        break;

        case "do-what-it-says":
        doWhatItSays();
        break;

        default:
            console.log("Sorry, you entered an incorrect search command. Please enter {concert-this}, {spotify-this-song}, {movie-this}, or {do-what-it-says}, and then a parameter that fits the search command.")
    }
}
switchCommands();

// CONCERT-THIS
function concertThis(){
    if (userParameters === undefined){
        userParameters = "Go Your Own Way"
    }  
    axios
    .get("https://rest.bandsintown.com/artists/" + userParameters + "/events?app_id=codingbootcamp")
    .then(function(response){
        for(var i = 0; i < response.data.length; i++){
            console.log("+========================== Concert Dates ==============================+");
            console.log("Venue Name: " + response.data[i].venue.name);
            console.log("Venue Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country);
            console.log("Date of Concert(s): " + moment(response.data[i].datetime).format("L"));
            console.log("+======================================================================+");
        }
    })
};

// SPOTIFY-THIS-SONG
function spotifyThis(){
    if (userParameters === undefined){
        userParameters = "Dreams"
    }   
    spotify.search({ 
        type: "track", 
        query: userParameters
    })
    .then(function(data){
    // console.log(data.tracks.items);
        console.log("+========================== Music Results ==============================+");
        console.log("Artist: " + data.tracks.items[0].artists.name);
        console.log("Song Name: " + data.tracks.items[0].name);
        console.log("Link to Preview Song: " + data.tracks.items[0].preview_url);
        console.log("Album: " + data.tracks.items[0].album.name);
        console.log("+======================================================================+");
    })
    .catch(function(err) {
        console.log(err);
    });
};

// MOVIE-THIS
function movieThis(){
        axios
        .get("http://www.omdbapi.com/?t=" + userParameters + "&y=&plot=short&apikey=trilogy")
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
};

// DO-WHAT-IT-SAYS
function doWhatItSays(){
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
};