// Code for reading and setting any environment variables with the dotenv package
require("dotenv").config();

// This code is required to import the keys.js file. It is stored in a variable
var axios = require("axios");


// CONCERT CALL



// SPOTIFY CALL

// var keys = require("./keys.js");
// //
// // Varible spotifyThis stores the Spotify action; variable userSerach is the parameter the user puts in
// // i.e. the title of the song
// // var command1 = process.argv[2];
// // var command2 = process.argv[3];

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

var movieName = process.argv[3];

var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

axios.get(queryURL).then(
    function(response){
        console.log("Moive Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Rating: " + response.data.rottenTomatoesRating);
        console.log("Country/Origin: " + response.data.Country);
        console.log("Language of the movie: " + response.data.Language);
        console.log("Movie Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
        console.log("+------------------------------------------------");
    }
)

// DO WHAT IT SAYS