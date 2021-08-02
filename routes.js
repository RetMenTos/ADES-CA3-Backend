const express = require("express");
const scoreModel = require("./models");
const app = express();

app.post("/add_score", async (req, res) => {
    const reqName = req.query.name;
    const reqScore = req.query.score;
    const requestJSON = JSON.parse(`{ "name": "${reqName}", "score": ${reqScore} }`);
    const score = new scoreModel(requestJSON);
  
    try {
      await score.save();
      res.send(score);
    } catch (error) {
      res.status(500).send(error);
    }
});

app.get("/scores", async (req, res) => {
    const scores = await scoreModel.find({});
  
    try {
      res.send(scores);
    } catch (error) {
      res.status(500).send(error);
    }
});

module.exports = app;