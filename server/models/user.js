const mongoose = require("mongoose");

const PlaylistSchema = new mongoose.Schema({
  name: String,
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }]
});

const UserSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String, // Store hashed password!
  playlists: [PlaylistSchema],
});

module.exports = mongoose.model("User", UserSchema);
