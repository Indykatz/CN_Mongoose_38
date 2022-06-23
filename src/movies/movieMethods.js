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
    await Movie.deleteOne(movieObj);
  } catch (error) {
    console.log(error);
  }
};

// Update one or update many Movie
exports.editMovie = async (theTitle, theEdits) => {
  try {
    const filmTitle = { title: theTitle };
    const newData = {
      $set: {
        title: theEdits.title,
        director: theEdits.director,
        year: theEdits.year,
      },
    };
    const editEntry = await Movie.updateOne(filmTitle, newData);
    console.log(editEntry);
  } catch (error) {
    console.log(error);
  }
};
