const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

const {
  mongoose
} = require('./db/mongoose');
const {
  Todo
} = require('./models/todo');
const {
  User
} = require('./models/user');

let app = express();

app.use(bodyParser.json());
app.set('view engine', 'hbs')

////////////// -> hbs
hbs.registerPartials(__dirname + '/views');

////////////////////////////////////
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

////////////////////////////////////////
app.post('/todos/remove', (req, res) => {
  Todo.findOneAndDelete({
    _id: req.body._id
  }).then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(4000).send(err);
  })
});

////////////////////////////////////////
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (err) => {
    res.status(400).send(err);
  });
});

app.listen(port, () => {
  console.log(`App started on port ${port}`)
});



///////////////
///////////////
///////////////
module.exports = {
  app
};
