const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
///////////////////////////////////////////
const port = process.env.PORT || 3000;
///////////////////////////////////////////
const {
  mongoose
} = require('./db/mongoose');
const {
  Todo
} = require('./models/todo');
const {
  User
} = require('./models/user');
const {
  ObjectID
} = require('mongodb');
///////////////////////////////////////////
let app = express();
app.use(bodyParser.json());
app.set('view engine', 'hbs')
////////////// -> hbs
hbs.registerPartials(__dirname + '/views');
//////////////////////////////////// -> presist new document
app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });

});
//////////////////////////////////////// -> remove
app.post('/todos/remove', (req, res) => {
  Todo.findOneAndDelete({
    _id: req.body._id
  }).then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(4000).send(err);
  })
});
//////////////////////////////////////// -> get all
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({
      todos
    });
  }, (err) => {
    res.status(400).send(err);
  });
});

app.listen(port, () => {
  console.log(`App started on port ${port}`)
});
//////////////////////////////////////// -> get by id
app.get('/todos/:id', (req, res) => {
  let todoId = req.params;

  if (!ObjectID.isValid(todoId.id)) {
    return res.status(404).send();
  }

  Todo.findById(todoId.id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({
      todo
    });
    console.log(JSON.stringify(todo, undefined, 2));
  }).catch((err) => res.status(404).send());
});
//////////////////////////////////////// -> remove by id
app.delete('/todos/:id', (req, res) => {
  let todoId = req.params;

  if(!ObjectID.isValid(todoId.id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(todoId.id).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    }
    res.send({
      todo
      });
    console.log(JSON.stringify(todo, undefined, 2));
  }).catch((e) => res.status(404).send());

});
///////////////
///////////////
///////////////
module.exports = {
  app
};
