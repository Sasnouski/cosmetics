
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var PostSchema = new Schema({
  title: {
    type: String,
    default: '',
    trim: true
  },
  text: {
    type: String,
    default: '',
    trim: true
  }
});
module.exports = mongoose.model('Post', PostSchema);
