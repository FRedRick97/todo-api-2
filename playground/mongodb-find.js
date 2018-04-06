const { MongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017';

const dbName = 'TodoApp';
// Connect using MongoClient
MongoClient.connect(url, (err, client) => {
    if (err)
        return console.log(err);

    console.log('Connected to MongoDB server');
    // created collection named Todos
    const col = client.db(dbName).collection('Todos');

    col.find({
        completed: false
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    })
});


