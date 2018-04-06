const { ObjectID } = require('mongodb');
const mongoose = require('./../db/mongoose');
const Todo = require('./../models/todo');

var id = '5ac4895e6c0784078882fd88';

if (!ObjectID.isValid(id)) {
    console.log('ID is not valid');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todos) => {
    console.log('Todos By id', todos);
});
