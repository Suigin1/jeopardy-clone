const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreboardSchema = new Schema({
  nickname: { type: String, required: true },
  score: { type: Number, required: true }
});

module.exports = mongoose.model('Scoreboard', scoreboardSchema);