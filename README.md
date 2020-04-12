# liri-node-app

## Overview --
This is a "LIRI" application. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives users back data.

## Technologies Used -- 
* [Node.js]
* [Node-File-System]
* [JavaScript]
* [Axios]
* [Dotenv]
* [Moment]
* [Node-spotify-api]
* [OMDB-api]
* [Bandsintown-api]

The app uses `.gitignore` to store APIs locally -- they are kept safe through abstraction by `.env`/`dotenv` node package. The user will enter in all text and data using the terminal. If user incorrectly entered in search command, an error message will appear asking them to re-enter a correct command.

![incorrect search command message](LIRI-node-app-incorrect-search-command.gif)


## Instructions/Commands --

1. Concert-this: 

    Interested to know when your favorite band's concert dates are?! Look no further than the `concert-this` command. It searches your band of interest using the bandsintown API through axios. Once a valid parameter has been met, the command will return a number of results for easy searching, the name of the venue, the location, and the date of the concert. 

 ### Preview below:

![concert-this](LIRI-node-app-concert-this.gif)


2. Spotify-this-song

    If you are curious about one of your many faviorte songs, be sure to use the `spotify-this-song` command. Using the Spotify api, it searches for the song you passed as a parameter through the command line, and returns the name of the artist, the name of the song, a link to preview the song, as well as the album you can find the song in.

### Preview below:

![spotify-this-song](LIRI-node-app-spotify-this-song.gif)

3. Movie-this

    Are you curious to know all about your favorite movie? (Really wanting to know that Rotten Tomatoes rating??) Then use the `movie-this` command. Using the OMDB API through axios, movie-this searches for your parameter. It returns the movie title, the year released, IMDB rating, Rotten Tomatoes rating, country where the movie was produced, language, plot, and cast members.

 ### Preview below:

![movie-this](LIRI-node-app-movie-this.gif)


4. Do-what-it-says

    Using the fs.node package, `do-what-it-says` command reads the text within the `random.txt` file and searches that text within, using the Spotify api to provide the spotify-this-song resutls.

 ### Preview below:

![do-what-it-says](LIRI-node-app-do-what-it-says.gif)
