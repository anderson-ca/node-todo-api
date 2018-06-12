// const MongoClient = require('mongodb').MongoClient;

const {
  MongoClient,
  ObjectID
} = require('mongodb'); // object desconstructing

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to database.');
  }
  console.log('Connected to mongodb server.');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'the is a new text entry',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to persist new data', err)
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Ilaha Cardoso',
    age: 26,
    location: 'Austin, TX',
  }, (err, result) => {
    if (err) {
      return console.log('Unable to persist data', err);
    }

    console.log(result.ops[0]._id.getTimestamp());
  });

  client.close();
});
