const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to server...');
  }

  console.log('Connected to server...')

  let db = client.db('TodoApp');

  // deleteOne
  db.collection('Users').deleteOne({name: 'Anderson Cardoso'}).then((res) => {
    console.log(res);
  })

  // deleteMany
  db.collection('Users').deleteMany({name: 'Rick'}).then((res) => {
    console.log(res);
  });

  //findOneAndDelete
  db.collection('Users').findOneAndDelete({name: 'some dude'}).then((res) => {
    console.log(res);
  })
});
