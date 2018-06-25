const {MongoClient, ObjectID} = require('mongodb');
const {Todo} = require('./../server/models/todo');
const {mongoose} = require('./../server/db/mongoose');


Todo.remove({}).then((res) => {
  console.log(res);
});

Todo.findOneAndRemove('_id': '5b313e7b12b09dda045ec512').then((todo) => {
  console.log(todo);
});
Todo.findByIdAndRemove('5b313e7b12b09dda045ec512').then((todo) => {
  console.log(todo);
});
