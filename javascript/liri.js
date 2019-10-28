// Code for reading and setting any environment variables with the dotenv package
require("dotenv").config();

// This code is required to import the keys.js file. It is stored in a variable
var keys = require("./keys.js");

// Allows us to access our keys information like so:
var spotify = new spotify(keys.spotify);

