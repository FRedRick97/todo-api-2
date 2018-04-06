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

    col.findOneAndUpdate({
        _id: new ObjectID('5ac4764885cd2e05be1c4f94')
    }, {
            $inc: {
                age: +1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        }, (err) => {
            console.log('Unable to update ', err);
        })
});


