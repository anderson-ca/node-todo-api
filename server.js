const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim
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

let newTodo = new Todo({
  text: 'Learn how to program'
});

newTodo.save().then((res) => {
  console.log('Data saved to collection', res);
}, (err) => {
  console.log('Unable to persist data to collection');
});

let otherTodo = new Todo({
  text: 'this is a test',
  complete: true,
  completedAt: 123
});
otherTodo.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
  console.log('Unable to persist data to collection');
});
