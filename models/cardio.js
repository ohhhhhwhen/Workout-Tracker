const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;
const cardioSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  distance: {
    type: Number,
    required: `Distance input required`
  },
  duration: {
    type: Number,
    required: `Duration input required`
  }
});

module.exports = mongoose.model(`Cardio`, cardioSchema);