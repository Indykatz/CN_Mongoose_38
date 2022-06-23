require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { addMovie, listMovies } = require("./movies/movieMethods");

// yargs what we pass in terminal
const app = async (yargsObj) => {
  try {
    if (yargsObj.add) {
      await addMovie({ title: yargsObj.title, actor: yargsObj.actor });
      console.log(await listMovies());
    } else if (yargsObj.list) {
      console.log(await listMovies());
    } else if (yargsObj.delete) {
      // delete
      await removeMovie({ title: yargsObj.title, actor: yargsObj.actor });
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
