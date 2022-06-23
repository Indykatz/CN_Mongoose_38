const mongoose = require("mongoose");
const Movie = require("./movieModels");

// Functionality

// Add Movie
exports.addMovie = async (movieObj) => {
  try {
    await Movie.create(movieObj);
  } catch (error) {
    console.log(error);
  }
};

// List Movies
exports.listMovies = async () => {
  try {
    return await Movie.find({});
  } catch (error) {
    console.log(error);
  }
};

// Delete one or delete many Movie
exports.removeMovie = async (movieObj) => {
  try {
    await Movie.remove(movieObj);
  } catch (error) {
    console.log(error);
  }
};

// Update one or update many Movie
