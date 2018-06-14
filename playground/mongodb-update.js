const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('unable to connect to server');
  }

  console.log('Connected to MongoDB server...');

  let db = client.db('TodoApp');

  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID('5b22c29e3bcbebff9bfa69bb')
  // }, {
  //   $set: {
  //     name: 'Tiny Rick'
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res);
  // });

  db.collection('Users').findOneAndUpdate({
    name: 'Anderson'
  }, {
    $set: {
      name: 'Anderson Cardoso'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((x) => {
    console.log(x);
  });

  client.close();
});
