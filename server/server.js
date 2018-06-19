const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

let app = express();

app.listen(port, () => {
  console.log(`App started on port ${port}`)
});
