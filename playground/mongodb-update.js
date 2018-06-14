const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    console.log('unable to connect to server');
  }

  console.log('Connected to server...');

  let db = client('TodoApp');



  // client.close();
});
