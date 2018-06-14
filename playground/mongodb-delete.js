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
  db.collection().deleteOne().then((res) => {
    console.log(res);
  })

  // deleteMany
  db.collection('Users').deleteMany({name: 'Ilaha Cardoso'}).then((res) => {
    console.log(res);
  });

  //findOneAndDelete
  db.collection().findOneAndDelete().then((res) => {
    console.log(res);
  })


});
