var mongoose = require('mongoose');
mongoose.connect('mongodb://todo:todo@ds015730.mlab.com:15730/testtodolistqq');
// mongoose.connect('mongodb://localhost:27017/person');
var Schema = mongoose.Schema;

// Define Schema
var personSchema = new Schema({
  title : String,
  content  : String
});

module.exports = mongoose.model('Person', personSchema);
