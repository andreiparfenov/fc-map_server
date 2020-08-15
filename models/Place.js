var mongoose = require('mongoose');

var PlaceSchema = new mongoose.Schema({
  title: String,
  desc: String,
  coords: [{ type: Number }],
  type: String
});

module.exports = mongoose.model('Place', PlaceSchema);