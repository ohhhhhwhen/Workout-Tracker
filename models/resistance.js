"use strict";

const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const resistanceSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  weight: {
    type: Number,
    required: `Weight input required`
  },
  sets: {
    type: Number,
    required: `Sets input required`
  },
  reps: {
    type: Number,
    required: `Reps input required`
  },
  duration: {
    type: Number,
    required: `Duration input required`
  }
});

module.exports = mongoose.model(`Resistance`, resistanceSchema);
