const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5b2ab947cec7caaef082990b';

let userId = '5b2bf4633bcbebff9bfaa0ff'

if(!ObjectID.isValid(userId)) {
  console.log('ID is invalid');
}

if(!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos: ', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo: ', todo);
});

Todo.findById(id).then((todo) => {
  if(!todo) {
    return console.log('ID not found');
  }
  console.log('Todo by ID:', todo);
}).catch((err) => console.log(err));

User.findById(userId).then((todo) => {
  if(!todo) {
    console.log('ID not found');
  }
  console.log(JSON.stringify(todo, undefined, 2));
}).catch((err) => err);
