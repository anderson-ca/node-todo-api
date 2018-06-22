const mongoose = require('mongoose');
const mongodbURI = 'mongodb://<dbuser>:<dbpassword>@ds163870.mlab.com:63870/c-137';

mongoose.Promise = global.Promise;
mongoose.connect(mongodbURI || process.env.'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
}
