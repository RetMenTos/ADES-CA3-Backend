const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    default: 0,
  },
});

const Score = mongoose.model("Score", ScoreSchema);

module.exports = Score;