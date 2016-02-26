
var mongoose = require('mongoose');
module.exports = function() {
  var db = mongoose.connect('mongodb://127.0.0.1:27017/cosmetics');
  require('../models/post.model');
  return db;
};
