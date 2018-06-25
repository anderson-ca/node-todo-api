const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || process.env.'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
}
