"use strict";

const express = require(`express`);
const logger = require(`morgan`);
const mongoose = require(`mongoose`);
const PORT = process.env.PORT || 3008;
const path = require(`path`);
const app = express();

app.use(logger(`dev`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`public`));

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/workoutdb`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, `./public/index.html`));
});

app.get(`/exercise`, (req, res) => {
  res.sendFile(path.join(__dirname, `./public/exercise.html`));
});

app.get(`/stats`, (req, res) => {
  res.sendFile(path.join(__dirname, `./public/stats.html`));
});