const mongoose = require('mongoose');
const mongodbURI = process.env.MONGODB_URI;
console.log(mongodbURI);

mongoose.Promise = global.Promise;
mongoose.connect(mongodbURI || process.env.'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
}
