const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  id: {type: Number, required: true},
  category: {type: String, required: true},
  clueCount: {type: Number, required: true},
  clues: {type: Array, required: true}
});

module.exports = mongoose.model('Category', categorySchema);