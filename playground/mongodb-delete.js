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

    // deleteMany
    // col.deleteMany({ text: 'Bullet Force' }).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to delete ', err);
    // })
    // deleteOne

    // col.deleteOne({
    //     text: 'Minecraft'
    // }).then((result) => {
    //     console.log(result.result);
    // });

    // findOneAndDelete

    col.findOneAndDelete({
        _id: new ObjectID('5ac475e9458ef105b0011b8c')
    }).then((result) => {
        console.log(result);
    })
});
