const {MongoCient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    console.log('Unable to connect to server...');
  }
});
