const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ScoreSchema = new Schema({
  score: [],
});

module.exports = Score = mongoose.model("Score", ScoreSchema);
