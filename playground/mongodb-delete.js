// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// Example
// var obj = new ObjectID();
// console.log(obj);

// Destructuring example
// var user = {name: 'wesley', age: 21};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteMany({name: 'Wesley'}).then((result) => {
    console.log(result);
  });

  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID('593f098826bc694d4f422ac6')
  // }).then((result) => {
  //   console.log(result);
  // });


  // db.close();
});
