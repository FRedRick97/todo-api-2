// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017';

const dbName = 'TodoApp';
// Connect using MongoClient
MongoClient.connect(url, (err, client) => {
    if (err)
        return console.log(err);

    console.log('Connected to MongoDB server');
    // created collection named Todos
    const col = client.db(dbName).collection('Users');

    col.insertOne({
        name: 'Minecraft',
        age: 21,
        location: 'New York'
    }, function (err, results) {
        if (err)
            return console.log(err);
        console.log(JSON.stringify(results.ops, undefined, 2));
    });
    client.close();
});


