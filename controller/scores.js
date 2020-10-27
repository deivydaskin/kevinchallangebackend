const Score = require("../models/Score");

module.exports = {
  addScore: async (req, res) => {
    const newScore = new Score({
      score: req.body.squares,
    });
    console.log(req.body.squares);
    newScore.save().then((score) => res.json(score));

    Score.findOneAndDelete({}, { sort: { score: 1 } })
      .collation({ locale: "en_US", numericOrdering: true })
      .then((a) => console.log(a))
      .catch((err) => console.log(err));
  },

  getScores: async (req, res) => {
    Score.find()
      .then((scores) => res.json(scores))
      .catch((err) => res.send(err));
  },
};
