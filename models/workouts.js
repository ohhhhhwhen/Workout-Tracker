"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutsSchema = new Schema({
  day: {
    type: Date,
    default: () => Date.now,
    unique: true
  },
  exercises: Array
});

module.exports = mongoose.model(`Workouts`, workoutsSchema);