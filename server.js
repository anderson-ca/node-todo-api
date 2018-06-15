const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// todo model
let Todo = mongoose.model('Todo', { // schema
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  complete: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// let newTodo = new Todo({
//   text: 'Learn how to program'
// });
//
// newTodo.save().then((res) => {
//   console.log('Data saved to collection', res);
// }, (err) => {
//   console.log('Unable to persist data to collection');
// });

// let otherTodo = new Todo({
//   text: 'this is a test with a validation schema',
// });
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//   console.log('Unable to persist data to collection');
// });

// user model
let User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  }
});

let newUser = new User({
  email: 'user@email'
});

newUser.save().then((res) => {
  console.log(JSON.stringify(res, undefined, 2));
}, (err) => {
  console.log('Unable to persist data to collection');
});
