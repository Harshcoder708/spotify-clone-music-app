const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost/musicdb", { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/playlists", require("./routes/playlists"));
app.use("/api/comments", require("./routes/comments"));
app.use("/api/songs", require("./routes/songs"));

app.listen(4000, () => console.log("Server running on port 4000"));
