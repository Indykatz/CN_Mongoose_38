require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { addMovie, listMovies, removeMovie } = require("./movies/movieMethods");

// yargs what we pass in terminal
const app = async (yargsObj) => {
  try {
    // Add
    if (yargsObj.add) {
      await addMovie({ title: yargsObj.title, actor: yargsObj.actor });
      console.log(await listMovies());
      //   List
    } else if (yargsObj.list) {
      console.log(await listMovies());
      //   Delete
    } else if (yargsObj.delete) {
      await removeMovie({ title: yargsObj.title, actor: yargsObj.actor });
      console.log(await listMovies());
      //   Edit
    } else if (yargsObj.edit) {
      //
    } else {
      console.log("Incorrect command");
    }
    await mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);
