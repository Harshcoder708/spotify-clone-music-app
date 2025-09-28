const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
  title: String,
  artist: String,
  src: String, // URL to audio file
  cover: String, // URL to album art
  genre: String,
  duration: Number,
});

module.exports = mongoose.model("Song", SongSchema);
