// Code for reading and setting any environment variables with the dotenv package
require("dotenv").config();

// Variables for storing
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var makingARequest = require("making-a-request");
var moment = require("moment");
var fs = require("fs");

// Variables for taking in user commands
var argCommand = process.argv[2];
var userSearch = process.argv[3];


// CONCERT CALL
function concertInquiry() {
    var artistName = process.argv[3];
    
    makingARequest = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";
    
    axios.get(queryURL).then(
        function(response){
            console.log("+========================== Concert Dates ==============================+");
            console.log("Venue Name: " + response.data.Title);
            console.log("Venue Location: " + response.data.Year);
            console.log("Date of Concert: " + response.data.imdbRating);
            console.log("+======================================================================+");
        }
    )
    }


// Switch 
// function switchCommands(userSearch) {
//     switch (userSearch){
//         case: "concert-this":
//         // argumentname = ;
//         break;

//         case: "spotify-this-song":
//         //
//         break;

//         case: "movie-this":
//         // argumentname = ;
//         break;

//         case: "do-what-it-says":
//         // argumentname = ;
//         break;
//     }
        
// }




// SPOTIFY CALL

// 
// //
// // Varible spotifyThis stores the Spotify action; variable userSearch is the parameter the user puts in
// // i.e. the title of the song


// // Tests for multiple words in user's search
// for (var i = 4; i < process.argv.length; i++) {
//     command1 += '+' + process.argv[i];
// }

// Write to random.txt file

// Allows us to access our keys information/gabbing the Spotify keys
// var spotify = new spotify(keys.spotify);

// // 

// // functions(search) 

// // Creating a object for the user's search
// function spotifyMusic(artistName, songTitle, previewSong, album) {
//     this.artistName = artistName;
//     this.songTitle = songTitle;
//     this.previewSong = previewSong;
//     this.album = album;
//         console.log("Result " + i);
//         console.log("Arist(s): " + this.artistName);
//         console.log("Song Name: " + this.songTitle);
//         console.log("Preview Song: " + this.previewSong);
//         console.log("Album: " + this.album);
//         console.log("+------------------------------------------------");
// }

// OMBD CALL

function movieInquiry() {
var movieName = userSearch;

var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

axios.get(queryURL).then(
    function(response){
        console.log("+========================== Movie Result ==============================+");
        console.log("Moive Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Rating: " + response.data.rottenTomatoesRating);
        console.log("Country/Origin: " + response.data.Country);
        console.log("Language of the movie: " + response.data.Language);
        console.log("Movie Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
        console.log("+======================================================================+");
    }
)
}


// DO WHAT IT SAYS